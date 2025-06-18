import express from 'express';
const app = express();
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import { ConnectDatabase } from './config/dbConnection.js';
import errorMiddleware from './middlewares/error.js';

import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Handle Uncaught Exceptions
process.on("uncaughtException", (err) => {
    console.log(`ERROR: ${err}`);
    console.log('Shutting Down Server Due To Uncaught Exception');
    process.exit(1);
});

if (process.env.NODE_ENV !== "PRODUCTION") {
    dotenv.config({ path: 'backend/config/config.env' });
}

// Connecting To Database 

ConnectDatabase();

app.use(express.json({
    limit: '10mb',
    verify: (req, res, buf) => {
        req.rawBody = buf.toString();
    }
}));
app.use(cookieParser());

// Import All products Routes
import productRutes from './routes/products.js';
import authRoutes from './routes/auth.js'
import orderRoutes from './routes/order.js';
import paymentRoutes from './routes/payment.js';

// Product Routes
app.use('/api/v1', productRutes);

// auth raoutes
app.use('/api/v1', authRoutes);

// order routes
app.use('/api/v1', orderRoutes);

// payment routes
app.use('/api/v1', paymentRoutes);

// connecting backend to frontend // production
if (process.env.NODE_ENV === "PRODUCTION") {
    app.use(express.static(path.join(__dirname, "../frontend/build")));

    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "../frontend/build/index.html"));
    });
}

// Using Error middleware
app.use(errorMiddleware);

const server = app.listen(process.env.PORT, () => {
    console.log(`Server Is Running On PORT: ${process.env.PORT} in ${process.env.NODE_ENV} mode.`);
});

// Handle Unhandled Promise Rejections

process.on("unhandledRejection", (err) => {
    console.log(`ERROR: ${err}`,);
    console.log('Shutting Down Server Due To Unhandled Promise Rejection');
    server.close(() => {
        process.exit(1);
    });
});