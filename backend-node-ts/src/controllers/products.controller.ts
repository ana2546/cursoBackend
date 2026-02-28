import { Request, Response } from 'express';
import * as productService from '../services/products.service';
import { CreateProductDTO} from '../models/products.model';

export const showDashboard = async (req: Request, res: Response) => {
  try {
    const products = await productService.listProducts();
    res.render('products', { products });
  } catch (error) {
    console.error("Error al obtener productos:", error);
    res.status(500).render('error', { message: 'Error interno del servidor' });
  }
};

export const getAllProducts = async (req: Request, res: Response) => {
  try {
    const products = await productService.listProducts();

    res.status(200).json({ success: true, data: products });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: 'Error al obtener los productos' });
  }
};


export const createProduct = async (req: Request, res: Response) => {
  try {
    const { name, price, quantity, category_id } = req.body;

    // Validación básica manual
    if (!name || !price || !quantity || !category_id) {
      return res.status(400)
      .json({
        success: false,
        message: "Datos de producto incompletos",
      });
    }

    const newProduct: CreateProductDTO = {
      name,
      price: Number(price),
      quantity: Number(quantity),
      category_id: Number(category_id),
    };

    await productService.addProduct(newProduct);

    res.status(201)
    .json({ success: true,message: 'Producto creado correctamente'});

  } catch (error) {
    console.error("Error al crear producto:", error);

    res.status(500).json({
      success: false,
      message: "Error interno del servidor",
    });
  }
};
