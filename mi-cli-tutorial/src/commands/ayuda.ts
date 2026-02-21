// src/commands/ayuda.ts

/**
 * Comando: ayuda
 * Muestra la ayuda con todos los comandos
 */
export function ejecutarAyuda(): void {
  console.log('📖 CLI Tutorial - Comandos Disponibles\n');
  console.log('  saludar [nombre]     - Saluda a una persona');
  console.log('  sumar <n1> <n2>      - Suma dos números');
  console.log('  listar [cantidad]    - Lista elementos (1-20, default: 5)');
  console.log('  info                 - Muestra información del sistema');
  console.log('  ayuda / help         - Muestra esta ayuda\n');
  console.log('Ejemplos:');
  console.log('  npm start saludar "Juan"');
  console.log('  npm start sumar 10 5');
  console.log('  npm start listar 3');
}