import { GetLandingProductsQuery } from '@/lib/graphql/generated/graphql'
import { fetchGraphQL } from '@/lib/graphql/fetcher'
import { getLandingProductsDocument } from '@/lib/graphql/queries/get-landing-products'
import PageTitle from '@/components/page-title';
import ProductCard from '@/components/product-card';
import SearchBar from '@/components/search-bar';

export default async function Home() {
  const data = await fetchGraphQL<GetLandingProductsQuery>({
    document: getLandingProductsDocument,
    revalidate: 60
  });

  const products = data?.getLandingProducts.products || []

  return (
    <div>
      <div className="flex items-center mb-12">
        <PageTitle className="mr-10" title="Products"/>
        <SearchBar/>
      </div>
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
