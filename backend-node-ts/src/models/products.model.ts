import pool from '../database/mysql';
import { RowDataPacket } from 'mysql2';
import { ResultSetHeader } from 'mysql2';




// Representa un producto tal como vive en la base de datos
export interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
  category: string;
}

// Datos necesarios para crear un producto
export interface CreateProductDTO {
  name: string;
  price: number;
  quantity: number;
  category_id: number;
}

export interface updateProductDTO {
  name: string;
  price: number;
  quantity: number;
  category: number;
}


// Tipo específico para MySQL
export type ProductRow = Product & RowDataPacket;

export const getAllProducts = async (): Promise<Product[]> => {
  const [rows] = await pool.query<ProductRow[]>(`
    SELECT p.id, p.name, p.price, p.quantity, c.name AS category
    FROM products p
    JOIN categories c ON p.category_id = c.id
  `);

  return rows;
};

export const createProduct = async (data: CreateProductDTO): Promise<void> => {
  const { name, price, quantity, category_id } = data;

  await pool.execute(
    'INSERT INTO products (name, price, quantity, category_id) VALUES (?, ?, ?, ?)',
    [name, price, quantity, category_id]
  );
};


export const deleteProduct = async (id:number): Promise<number> => {
  const [result] = await pool.execute<ResultSetHeader>(
    'DELETE FROM products WHERE id = ?', 
    [id]);
  return result.affectedRows;
};


export const getProductById = async (id: number) => {
  const [rows]= await pool.query<(Product & RowDataPacket)[]>(
    'SELECT * FROM products WHERE id = ?',
    [id]
  );

  return rows[0] || null;
};


// export const updateProductById = async (
//   id: number,
//   data: updateProductDTO
// ): Promise<number> => {

//   const [result] = await pool.execute<ResultSetHeader>(
//     `UPDATE products 
//      SET name = ?, 
//          price = ?, 
//          quantity = ?, 
//          category_id = ?
//      WHERE id = ?`,
//     [data.name, data.price, data.quantity, data.category, id]
//   );

//   return result.affectedRows;
// };
