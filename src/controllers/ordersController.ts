import {Request , Response } from 'express';
import OrderModel from '../models/orderModel';
import { Order } from '../types/orderType';


const orderModel = new OrderModel();

export async function getAllOrders(request : Request , response : Response)
{
    try
    {
        const allOrders = await orderModel.getAllOrders();
        if(!allOrders) {response.send(`No orders are found.`);}
        response.send({
            status : 200,
            data : allOrders
        })
    }
    catch(err)
    {

    }
}
export async function getCurrentOrdersByUserID(request : Request , response : Response)
{
    try
    {
        const currentOrders = await orderModel.getCurrentOrdersByUserID(request.params.id);
        if(!currentOrders) {response.send(`No active orders are found for user with id = ${request.params.id}`);}
        response.send(
            {
                status: 200,
                data : currentOrders
            }
        );
    }
    catch(err)
    {
        throw new Error(`Something went wrong while trying to get all active orders...${err}`);
    }
}

export async function getCompletedOrdersByUserID(request : Request , response : Response)
{
    try
    {
        const completedOrders = await orderModel.getCompletedOrdersByUserID(request.params.id);
        if(!completedOrders) {response.send(`No active orders are found for user with id = ${request.params.id}`);}
        response.send(
            {
                status: 200,
                data : completedOrders
            }
        );
    }
    catch(err)
    {
        throw new Error(`${err}`);

    }
}