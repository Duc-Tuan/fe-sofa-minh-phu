import ProductDetailPage from "@/page/product/detail/ProductDetailPage";
import React from "react";

interface PageProps {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
}

function page({ params }: PageProps) {
  const { id } = params;

  return <ProductDetailPage id={id} />;
}

export default page;
