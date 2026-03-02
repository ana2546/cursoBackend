import { Request, Response } from 'express';
import * as productService from '../services/products.service';
import { CreateProductDTO, updateProductDTO} from '../models/products.model';


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


export  const deleteProduct = async (req: Request, res: Response) => {
  try {
    const  id  = Number(req.params.id);  
    if (!id || isNaN(Number(id))) {
      return res.status(400).json({ message: 'Invalid product ID' });
    }
    await productService.removeProduct(Number(id));
    res.status(200).json({ success: true, message: 'Producto eliminado correctamente' });
  } catch (error) {
    console.error("Error al eliminar producto:", error);
    res.status(500).json({ success: false, message: 'Error interno del servidor' });
  } }   



  export const getProduct = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);

    if (!id || isNaN(Number(id))) {
      return res.status(400).json({ message: 'Invalid product ID' });
    }

    const product = await productService.findProductById(id);

    return res.status(200).json(product);

  } catch (error: any) {

    if (error.message === 'Product not found') {
      return res.status(404).json({ message: error.message });
    }

    return res.status(500).json({ message: 'Internal server error' });
  }
};


// export const updateProduct = async (req: Request, res: Response) => {
//   try {
//     const id = Number(req.params.id);

//     if (isNaN(id)) {
//       return res.status(400).json({ message: 'Invalid product ID' });
//     }

//     const { name, price, quantity, category } = req.body;

//     if (
//       !name ||
//       typeof price !== 'number' ||
//       typeof quantity !== 'number' ||
//       typeof category !== 'number'
//     ) {
//       return res.status(400).json({ message: 'Invalid data' });
//     }

//     const updateData: updateProductDTO = {
//       name,
//       price,
//       quantity,
//       category
//     };

//     await productService.modifyProduct(id, updateData);

//     return res.status(200).json({ message: 'Product updated successfully' });

//   } catch (error:unknown) {
   

//     if (error instanceof Error && error.message === 'Product not found') {
//       return res.status(404).json({ message: error.message });
//     }

//     return res.status(500).json({ message: 'Internal server error' });
//   }
// };