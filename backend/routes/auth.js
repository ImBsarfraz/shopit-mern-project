import express from 'express';
import { 
    registerUser,
    loginUser, 
    logout, 
    forgotPassword, 
    resetPassword, 
    getUserProfile, 
    updatePassword, 
    updateProfile, 
    allUsers, 
    getUserDetails,
    updateUser,
    deleteUser,
    uploadAvatar,
} from '../controllers/authControllers.js';

import { authorizeRoles, isAuthenticatedUser } from '../middlewares/auth.js'

const router = express.Router();

// resgister user
router.route('/register').post(registerUser);
// login
router.route('/login').post(loginUser);
// logout
router.route('/logout').get(logout);
// forgotPassword
router.route("/password/forgot").post(forgotPassword);
// resetpassword
router.route("/password/reset/:token").put(resetPassword);
// Get User Profile
router.route("/me").get(isAuthenticatedUser,getUserProfile);
// Update User Profile
router.route("/me/update").put(isAuthenticatedUser,updateProfile);
// Update Password
router.route("/password/update").put(isAuthenticatedUser,updatePassword);
// Upload Avatar
router.route("/me/upload_avatar").put(isAuthenticatedUser, uploadAvatar);

// admin routes
// get all users
router.route("/admin/users").get(isAuthenticatedUser, authorizeRoles('admin'), allUsers);

// get user details
router.route('/admin/users/:id').get(isAuthenticatedUser, authorizeRoles('admin'), getUserDetails);

// update user details
router.route("/admin/users/:id").put(isAuthenticatedUser, authorizeRoles('admin'), updateUser);

// delete user
router.route("/admin/users/:id").delete(isAuthenticatedUser, authorizeRoles('admin'), deleteUser);

export default router;