import Image from 'next/image'
import { GetLandingProductsQuery } from '@/lib/graphql/generated/graphql'
import { fetchGraphQL } from '@/lib/graphql/fetcher'
import { getLandingProductsDocument } from '@/lib/graphql/queries/getLandingProducts'

export default async function Home() {
  const data = await fetchGraphQL<GetLandingProductsQuery>({
    document: getLandingProductsDocument,
    revalidate: 60
  });

  const products = data?.getLandingProducts.products || []

  return (
    <div>
      <h1 className="text-3xl">Featured Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="p-4">
            {product.images[0] && (
              <div className="aspect-square relative mb-4">
                <Image
                  src={product.images[0].secure_url || ''}
                  alt={product.title || ''}
                  fill
                  className="object-cover rounded-md"
                />
              </div>
            )}
            <h2 className="text-lg">{product.id}</h2>  
          </div>
        ))}
      </div>
    </div>
  )
}
