"use client"

import { useParams } from "next/navigation";
import { requireAuthentication } from "@/lib/require-authentication";

type ProducDetalPageParams = {
  slug: string
}

function ProductDetailPage() {
  const { slug }: ProducDetalPageParams = useParams();
  
  return (
    <div>PRODUCT DETAIL PAGE: {slug}</div>
  );
}

export default requireAuthentication(ProductDetailPage);