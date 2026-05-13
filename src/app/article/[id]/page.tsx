import DetailPage from "@/page/article/detail/DetailPage";
import React from "react";

interface PageProps {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
}

function page({ params }: PageProps) {
  const { id } = params;
  return <DetailPage id={id} />;
}

export default page;
