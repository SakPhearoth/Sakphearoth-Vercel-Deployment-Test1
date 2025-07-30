import React from "react";
import { DataTable } from "./DataTable";
import { columns } from "./Columns";
import { Product } from "@/types/product";

async function fetchProduct(): Promise<Product[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL_API}products`);
  const data = await res.json();
  return data.products;
}

export default async function ProductDashboard() {
  const data = await fetchProduct();
  return (
    <div className="container mx-auto p-5">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
