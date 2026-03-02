import * as productModel from '../models/products.model';
import { CreateProductDTO, updateProductDTO ,Product} from '../models/products.model';


export const listProducts = async (): Promise<Product[]> => {
  return productModel.getAllProducts();
};


export const addProduct = async (data: CreateProductDTO): Promise<void> => {
  await productModel.createProduct(data);
};

export const removeProduct = async (id: number): Promise<void> => {
const affectedRows = await productModel.deleteProduct(id);

  if (affectedRows === 0) {
    throw new Error('Product not found');
  }
};


export const findProductById = async (id: number) => {
  const product = await productModel.getProductById(id);

  if (!product) {
    throw new Error('Product not found');
  }

  return product;
};

// export const modifyProduct = async (
//   id: number,
//   data: updateProductDTO
// ): Promise<void> => {

//   const affectedRows = await productModel.updateProductById(id, data);

//   if (affectedRows === 0) {
//     throw new Error('Product not found');
//   }
// };