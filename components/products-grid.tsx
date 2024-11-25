import ProductCard from "./product-card";

type ProductsGridParams  = {
  products: string[]
}

export default function ProductsGrid({ products }: ProductsGridParams) {
  return(
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            slug={`/products/${product.slug}`}
            imageUrl={product.images[0].secure_url || ''}
            title={product.title || ''}
            description={product.description || ''}
            price={product.price[0]} />
        ))}
      </div>
  );
}