export type Product = {
    id: number;
    title: string;
    description: string;
    price: number;
    category: Category;
    images: string[];
    slug: string;
    createdAt: string;
    updatedAt: string;
}

export type Category = {
    id: number;
    name: string;
    image: string;
    slug: string;
}

export type ProductDetail = {
    id: number;
    title: string;
    description: string;
    price: number;
    category: Category;
    images: string[];
    slug: string;
    createdAt: string;
    updatedAt: string;
}