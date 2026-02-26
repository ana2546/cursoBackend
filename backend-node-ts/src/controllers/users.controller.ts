import { Request, Response } from 'express';
import * as userService from '../services/users.service';
import { sendWelcomeEmail } from '../services/mail.service';


export const getAllUsers = (req: Request, res: Response) => {
  try{
    const data = userService.getUsers();
  res.json(data); //por defecto es status 200
  } catch(error) {
    res.status(500).json({ message: "Error al obtener los usuarios"});
  }
};

export const addUser = (req: Request, res: Response) => {
  try{
    const user = userService.createUser(req.body);
    if (!user) {
        throw new Error ("Invalid user sata");
    }
     res.status(201).json(user);
    } catch (error) {
        res.status(400).json({message: "Datos de usuario invalidos"});
    }
};


export const addUser = async (req: Request, res: Response) => {
  const user = userService.createUser(req.body);

  // Enviamos el email de bienvenida
  await sendWelcomeEmail(user.email, user.name);

  res.status(201).json(user);
};
