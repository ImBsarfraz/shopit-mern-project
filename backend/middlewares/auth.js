import ErrorHandler from "../utils/errorHandler.js";
import catchAsyncError from "./catchAsyncError.js";
import jwt from 'jsonwebtoken';
import User from '../models/user.js'

// Checks if user is authenticated or not
export const isAuthenticatedUser = catchAsyncError(async(req, res, next) => {
    const { token } = req.cookies;

    if(!token){
        return next(new ErrorHandler('Login First To Access', 401));
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.id);
    // console.log(decoded);
    next();
});

// Authorize user roles
export const authorizeRoles = (...roles) => {
    return(req, res, next) => {
        if(!roles.includes(req.user.role)){
            return next(
                new ErrorHandler(`Role: (${req.user.role}) is not allow to access`, 
                    403
                )
            );
        }

        next();
    };
};  