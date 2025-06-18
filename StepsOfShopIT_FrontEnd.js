// Dev Mode Command: cd frontend -> npm start

// Shopit html css
// installing react
// header an dfooter
//ShopIt Home page
// react router dom implementation
// Add custom tiles wit helmet
// Implementation of reduxToolkit
// ReduxTool = is used manage the state= a global place where we can save application data 
// and we can get it by state
// Redux usage
// npm install @reduxjs/toolkit npm install react-redux
// creating store
// create provider in index file pass store in provider and wrap app in provider
// And Fetch data using RTK Query(ReduxToolKit Query)   
// fetching data of products
// exports getProducts using useGetProductsQuery from productApi In api folder of redux folder
// register productApi in store.js
// defaultmiddleware
// fetching data in frontend
// add field in package.json "proxy": "http://localhost:4000"
// Fetch data Render Products for redux store
// react star ratings npm i react-star-ratings
// Loader component and cache behavior
// Adding React Hot Store for alert messages
// imported to app.js coz we want it many times at every page
// Fetching ProductDetails 
// create a RTK query
// import it in productdetails component and use
// image fetching and features
// image pagination
// Pagination
// npm i react-js-pagination //home, customPage, productApi
// Search Feature
// filters // product item home column adjustment for filter section
// filter product with price
// copy layout from ghulams repo
// filter by category
// filter by rating
// Authentication
// login //auth/login.jsx  & redux/api/authApi.js & store.js ->post req mutaion instead of query
//registration /auth/register.jsx & redux/api/authApi.js & store.js  app.js
// load loggedin user in state  //userApi.js header.js api/features/userSlice.js store.js authApi.js
// show user in header header.jsx a-> link
// logout user authApi & header.jsx

// Displaying user profile and Sidebar menu
// User Layout
// component/layout/userlayout.jsx
// component/user/profile.jsx and app.js
// component/layout/sidebar.jsx


// Updateing User Profile

// reducx/api/userApi 
// src/comp/user/updateProfile

// Protecting Route from unauthenticated user

// component/auth/Protected Route

// SETTING UP CLOUDINARY ENVIRONMENT FOR IMAGE UPLOAD
// install cloudinary on backend
// backend/utils/cloudinary.js

// upload image on cloudinary
// backend/controllers/authcontroller/
// backend/routes/auth define route

// frondend/redux/api/userapi.js
// frondend/components/user/UploadAvatar.jsx
// set image size 
// backend/app.js 10mb limit of cloudinary
// remove previous avatar 
// backend/controllers/authcontroller/

// update password
// frontend/redux/api/userApi
// frontend/components/user/UpdatePassword.jsx
// Forgot password
// frontend/components/auth/forgotPassword.jsx
// redux/api/userApi.js
// change the 4000 to FRONTEND_URL=http://localhost:3000
// and auth controller resetUrl removed api/v1
// reset password
// /components/auth/ResetPassword.jsx
// /redux/api/userApi.js

// QUANTITY SELECTION
// pRODUCTdETAILS.JSX
// add to cart button]
// productdetails.jsx
// features/cartSlice
// fetching number of carts item in the header header.jsx
// cart component cart.jsx
// app.js
// Handle quantity on cart cart.jsx and cartSlice.js
// checkout and COD
// shipping.jsx, app.js, npm i countries-list, cartSlice.js/saveShippingInfo
// Order Details
// ConfirmOrder.jsx, helpers.js
// checkout steps CheckouSteps.jsx
// payment method jsx, orderApi.js, store.js

// Stripe Payment Gateway Itegration
// login dashboard secret key
// npm i stripe
// stripe checkout session
// backend => paymentController.js, payment.js(route), app.js
// frontend => orderApi, paymentMethod.jsx

// connecting stripe webhook with shopit
// stripe cli download install 
// stripe login
// stripe listen --events checkout.session.completed --forward-to localhost:4000/api/v1/payment/webhook
// paymentcontroller.js, app.js, config.env, routes(payment.js)

// Fetching Orders of logged in user 
// MDBReact, MyOrders.jsx, orderApireducx, App.js
// Display Order Details
// cartSlice.js, OrderDetails, App.js


// How to Deploy FUllSATCK PROJECT ON RENDER
// STEP 1 
// GO TO MONGODB ATLAS
// Clusters
// connect
// Drivers
// copy collection string
// use it as production db url

// Step 2
// generate the build on frontend f/package.json scripts-build 
// cd frontend = npm run build
// connect backend with frontend
// backend/app.js

// import path from 'path';
// import { fileURLToPath } from 'url';
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// if(process.env.NODE_ENV === "PRODUCTION") {
//     app.use(express.static(path.join(__dirname, "../frontend/build")));
// };

// app.get("*", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "../frontend/build/index.html"));
// });

// step 3
// Create Git Repo And Push The Project
// SET .env.production for production and add environment variables

// Step 4 
// DEPLOYMENT
// deploy on render
// render -> signin with git -> select project repo-> add branch -> 
// set start as npm start -> select free tier -> add from .env set environment variables
// Deploy Web Service
