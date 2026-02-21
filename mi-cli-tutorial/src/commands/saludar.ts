// src/commands/saludar.ts

import { obtenerArgumento } from '../utils/helpers';

/**
 * Comando: saludar
 * Saluda a una persona
 */
export function ejecutarSaludar(args: string[]): void {
  const nombre = obtenerArgumento(args, 1, 'Mundo');
  console.log(`👋 ¡Hola, ${nombre}!`);
  console.log(`📅 Fecha actual: ${new Date().toLocaleString()}`);
}