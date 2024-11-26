"use client";

import { requireAuthentication } from "@/lib/require-authentication";

function ProductDetailPage() {
  return (
    <div>PRODUCT DETAIL PAGE</div>
  );
}

export default requireAuthentication(ProductDetailPage);