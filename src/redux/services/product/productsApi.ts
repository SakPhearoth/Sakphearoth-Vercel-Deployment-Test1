import { Product, ProductDetail } from "@/types/product";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
    reducerPath: "productsApi",
    baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_BASE_URL_API_PLATZI }),
    tagTypes: ["Product"],

    endpoints: (builder) => ({
        getProducts: builder.query<Product[], void>({
            query: () => `products`,
            providesTags: ["Product"],
        }),

        getProductById: builder.query<ProductDetail, number>({
            query: (id) => `products/${id}`, // fetch by id
            providesTags: (result, error, id) => [{ type: "Product", id }],
        }),
    })
});

export const {
    useGetProductsQuery,
    useGetProductByIdQuery,
} = productsApi;
