import express from 'express';
import { canUserReview, createProductReview, deleteProductImage, deleteProduct, deleteReview, getAdminProducts, getProductDetails, getProductReviews, getProducts, newProduct, updateProduct, uploadProductImages } from '../controllers/productControllers.js';
import { authorizeRoles, isAuthenticatedUser } from '../middlewares/auth.js';

const router = express.Router();

// get All products
router.route('/products').get(getProducts);
// create new product
router.route('/admin/products').post(isAuthenticatedUser,  authorizeRoles('admin'), newProduct);
// Admin - get all products
router.route('/admin/products').get(isAuthenticatedUser,  authorizeRoles('admin'), getAdminProducts);

// Admin- upload product images
router.route('/admin/products/:id/upload_images').put(isAuthenticatedUser,  authorizeRoles('admin'), uploadProductImages);

// Admin- delete product image
router.route('/admin/products/:id/delete_image').put(isAuthenticatedUser,  authorizeRoles('admin'), deleteProductImage);

// get a single product details
router.route('/products/:id').get(getProductDetails);
// update product
router.route('/admin/products/:id').put(isAuthenticatedUser,  authorizeRoles('admin'), updateProduct);
// delete product
router.route('/admin/products/:id').delete(isAuthenticatedUser,  authorizeRoles('admin'), deleteProduct);

// REVIEWS OF A PRODUCT

// Create And Update Review
router
    .route('/reviews')
    .get(isAuthenticatedUser, getProductReviews)
    .put(isAuthenticatedUser, createProductReview);

// Delete Review - ADMIN 
router.route('/admin/reviews').delete(isAuthenticatedUser, authorizeRoles('admin'), deleteReview);
router.route("/can_review").get(isAuthenticatedUser, canUserReview);

export default router;