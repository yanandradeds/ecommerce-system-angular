export interface IProduct {
    content: Product[];
    totalPages: number;
    pageable: Pageable
}

export interface Product {
  description: string;
  price: number;
  quantity: number;
}

export interface Pageable {
    pageNumber: number
}