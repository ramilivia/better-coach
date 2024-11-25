import Image from 'next/image'
import { GetLandingProductsQuery } from '@/lib/graphql/generated/graphql'
import { fetchGraphQL } from '@/lib/graphql/fetcher'
import { getLandingProductsDocument } from '@/lib/graphql/queries/get-landing-products'
import PageTitle from '@/components/page-title';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import Link from 'next/link';

export default async function Home() {
  const data = await fetchGraphQL<GetLandingProductsQuery>({
    document: getLandingProductsDocument,
    revalidate: 60
  });

  const products = data?.getLandingProducts.products || []

  return (
    <div>
      <PageTitle>Landing Products</PageTitle>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
        {products.map((product) => (
          <Link href={`/products/${product.slug!}`} key={product.id}>
            <Card className="h-[400px]">
              <CardHeader className="h-60 p-0 mb-4">
                <div className="relative w-full h-full">
                  <Image
                    src={product.images[0].secure_url || ''}
                    alt={product.title || 'Product Image'}
                    fill
                    className="object-cover"
                  />
                </div>
              </CardHeader>
              <CardContent>
                <p className="line-clamp-3 max-h-[200px] overflow-hidden text-ellipsis">
                  {product.description}
                </p>
              </CardContent>
              <CardFooter className="justify-end">
                <p>
                  {product.price} EUR
                </p>
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}
