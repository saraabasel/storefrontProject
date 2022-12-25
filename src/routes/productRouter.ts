import express from 'express';
import * as ProductController from '../controllers/productController';


const productRouter = express.Router();

productRouter.get('/', ProductController.getAllProducts);

productRouter.get('/:id', ProductController.showProduct);

productRouter.post ('/' , ProductController.createProduct);

export default productRouter;