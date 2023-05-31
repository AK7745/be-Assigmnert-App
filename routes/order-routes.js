import express from 'express';
import { getOneOrder,createOrder, GetAllOrders, deleteOrder } from '../controllers/order-controller.js';
const orderRouter=express.Router();

orderRouter.post('/create-order',createOrder)
orderRouter.get('/get-single-order/:id',getOneOrder)
orderRouter.get('/get-all-order',GetAllOrders)
orderRouter.delete('/delete-order/:id',deleteOrder)

export default orderRouter