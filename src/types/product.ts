export type Product = {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    category: string;
    thumbnail: string;
}

export type ProductDetail = {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    category: string;
    thumbnail: string;
    stock: number;
    brand: string;
}