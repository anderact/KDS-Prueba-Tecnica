export interface Product {
  name: string;
  quantity: number;
  details?: string;
}

export type OrderStatus = 'En atencion' | 'Completado' | 'Cancelado' | null

export interface Order {
  id: number;
  products: Product[];
  timeElapsed: number;
  status: OrderStatus;
}