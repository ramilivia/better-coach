import { GetLandingProductsQuery } from '@/lib/graphql/generated/graphql'
import { fetchGraphQL } from '@/lib/graphql/fetcher'
import { getLandingProductsDocument } from '@/lib/graphql/queries/get-landing-products'
import PageTitle from '@/components/page-title';
import ProductCard from '@/components/product-card';

export default async function Home() {
  const data = await fetchGraphQL<GetLandingProductsQuery>({
    document: getLandingProductsDocument,
    revalidate: 60
  });

  const products = data?.getLandingProducts.products || []

  return (
    <div>
      <PageTitle title="Products"/>
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
    </div>
  )
}
