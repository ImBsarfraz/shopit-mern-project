import express from 'express';
const router = express.Router();
import { authorizeRoles, isAuthenticatedUser } from '../middlewares/auth.js';
import { allOrders, deleteOrder, getOrderDetails, getSales, myOrders, newOrder, updateOrder } from '../controllers/orderController.js';

// create new order
router.route("/orders/new").post(isAuthenticatedUser, newOrder);

// get order details
router.route("/orders/:id").get(isAuthenticatedUser, getOrderDetails);

// get orders of logged in user
router.route("/me/orders").get(isAuthenticatedUser, myOrders);

// ADMIN ORDER ROUTES
router
  .route("/admin/get_sales")
  .get(isAuthenticatedUser, authorizeRoles("admin"), getSales);

// get All Orders   
router.route("/admin/orders").get(isAuthenticatedUser, authorizeRoles('admin'), allOrders);

// update Order 
router.route("/admin/orders/:id").put(isAuthenticatedUser, authorizeRoles('admin'), updateOrder);

// delete Order
router.route("/admin/orders/:id").delete(isAuthenticatedUser, authorizeRoles('admin'), deleteOrder);

export default router;