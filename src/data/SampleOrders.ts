import { Order, Product } from "@/types/Order";

export const sampleOrders: Order[] = [
  {
    id: 1,
    products: [
      { name: 'Hamburguesa', quantity: 2, details: 'Con queso y tocino' },
      { name: 'Papas fritas', quantity: 1, details: 'Tamaño grande' },
      { name: 'Refresco', quantity: 1, details: 'Coca-Cola' },
      { name: 'Helado', quantity: 1, details: 'Vainilla' },
    ],
    timeElapsed: 5,
    status: 'En atencion',
  },
  {
    id: 2,
    products: [
      { name: 'Pizza', quantity: 1, details: 'Margarita' },
      { name: 'Ensalada', quantity: 1, details: 'César con pollo' },
      { name: 'Agua mineral', quantity: 1, details: '500 ml' },
      { name: 'Tiramisú', quantity: 1, details: 'Porción individual' },
    ],
    timeElapsed: 8,
    status: 'Completado',
  },
  {
    id: 3,
    products: [
      { name: 'Sushi', quantity: 3, details: 'Variado' },
      { name: 'Sopa miso', quantity: 1, details: 'Tamaño mediano' },
      { name: 'Té verde', quantity: 1, details: 'Caliente' },
      { name: 'Edamame', quantity: 1, details: 'Porción' },
    ],
    timeElapsed: 12,
    status: 'Cancelado',
  },
  {
    id: 4,
    products: [
      { name: 'Pasta', quantity: 2, details: 'Bolognesa' },
      { name: 'Pan de ajo', quantity: 1, details: 'Con queso' },
      { name: 'Vino tinto', quantity: 1, details: 'Botella' },
      { name: 'Tiramisú', quantity: 1, details: 'Compartido' },
    ],
    timeElapsed: 15,
    status: null,
  },
  {
    id: 5,
    products: [
      { name: 'Ensalada', quantity: 1, details: 'César con pollo' },
      { name: 'Agua mineral', quantity: 1, details: '500 ml' },
      { name: 'Pasta', quantity: 1, details: 'Al pesto' },
      { name: 'Gelato', quantity: 1, details: 'Chocolate' },
    ],
    timeElapsed: 20,
    status: 'En atencion',
  },
  {
    id: 6,
    products: [
      { name: 'Tacos', quantity: 3, details: 'Carne asada' },
      { name: 'Guacamole', quantity: 1, details: 'Porción' },
      { name: 'Cerveza', quantity: 2, details: 'Corona' },
      { name: 'Flan', quantity: 1, details: 'Vainilla' },
    ],
    timeElapsed: 25,
    status: 'Completado',
  },
  {
    id: 7,
    products: [
      { name: 'Sushi', quantity: 2, details: 'Sashimi de salmón' },
      { name: 'Sopa miso', quantity: 1, details: 'Tamaño grande' },
      { name: 'Té de jazmín', quantity: 1, details: 'Caliente' },
      { name: 'Roll de aguacate', quantity: 1, details: 'Vegetariano' },
    ],
    timeElapsed: 30,
    status: 'En atencion',
  },
  {
    id: 8,
    products: [
      { name: 'Pizza', quantity: 1, details: 'Hawaiana' },
      { name: 'Ensalada', quantity: 1, details: 'César con camarones' },
      { name: 'Vino blanco', quantity: 1, details: 'Chardonnay' },
      { name: 'Helado de frutas', quantity: 1, details: 'Mango' },
    ],
    timeElapsed: 35,
    status: 'Cancelado',
  },
  {
    id: 9,
    products: [
      { name: 'Hamburguesa', quantity: 1, details: 'Doble carne' },
      { name: 'Papas fritas', quantity: 1, details: 'Con ketchup' },
      { name: 'Gaseosa', quantity: 1, details: '500 ml' },
      { name: 'Brownie', quantity: 1, details: 'Con helado' },
    ],
    timeElapsed: 40,
    status: 'Completado',
  },
  {
    id: 10,
    products: [
      { name: 'Sushi', quantity: 2, details: 'Roll tempura' },
      { name: 'Edamame', quantity: 1, details: 'Porción' },
      { name: 'Té verde', quantity: 1, details: 'Frío' },
      { name: 'Tempura de vegetales', quantity: 1, details: 'Porción' },
    ],
    timeElapsed: 45,
    status: null,
  },
  {
    id: 11,
    products: [
      { name: 'Pasta', quantity: 1, details: 'Alfredo' },
      { name: 'Ensalada', quantity: 1, details: 'Griega' },
      { name: 'Vino tinto', quantity: 1, details: 'Botella' },
      { name: 'Tiramisú', quantity: 1, details: 'Individual' },
    ],
    timeElapsed: 50,
    status: 'En atencion',
  },
  {
    id: 12,
    products: [
      { name: 'Ensalada', quantity: 1, details: 'Griega' },
      { name: 'Papas fritas', quantity: 1, details: 'Con queso' },
      { name: 'Refresco', quantity: 1, details: 'Pepsi' },
      { name: 'Tiramisú', quantity: 1, details: 'Compartido' },
    ],
    timeElapsed: 55,
    status: 'Completado',
  },
  {
    id: 13,
    products: [
      { name: 'Tacos', quantity: 3, details: 'Pollo' },
      { name: 'Guacamole', quantity: 1, details: 'Porción' },
      { name: 'Margarita', quantity: 2, details: 'Clásica' },
      { name: 'Churros', quantity: 1, details: 'Con chocolate caliente' },
    ],
    timeElapsed: 60,
    status: 'Cancelado',
  },
  {
    id: 14,
    products: [
      { name: 'Pizza', quantity: 1, details: 'Pepperoni' },
      { name: 'Pan de ajo', quantity: 1, details: 'Sin queso' },
      { name: 'Vino tinto', quantity: 1, details: 'Botella' },
      { name: 'Helado', quantity: 1, details: 'Vainilla' },
    ],
    timeElapsed: 65,
    status: 'En atencion',
  },
  {
    id: 15,
    products: [
      { name: 'Hamburguesa', quantity: 1, details: 'Vegetariana' },
      { name: 'Papas fritas', quantity: 1, details: 'Con mayonesa de ajo' },
      { name: 'Gaseosa', quantity: 1, details: '500 ml' },
      { name: 'Cheesecake', quantity: 1, details: 'De fresa' },
    ],
    timeElapsed: 70,
    status: 'Completado',
  },
  {
    id: 16,
    products: [
      { name: 'Sushi', quantity: 2, details: 'Nigiri de atún' },
      { name: 'Edamame', quantity: 1, details: 'Porción' },
      { name: 'Té de burbujas', quantity: 1, details: 'Sabor melón' },
      { name: 'Roll de aguacate', quantity: 1, details: 'Vegetariano' },
    ],
    timeElapsed: 75,
    status: 'En atencion',
  },
];
