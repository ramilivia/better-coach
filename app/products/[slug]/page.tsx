"use client"

import { useParams } from "next/navigation";
import { requireAuthentication } from "@/lib/require-authentication";
import { useQuery } from "@apollo/client";
import { getProductBySlugDocument } from "@/lib/graphql/queries/get-product-by-slug";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Star, Truck } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";

type ProductDetailPageParams = {
  slug: string
}

function ProductDetailPage() {
  const { slug }: ProductDetailPageParams = useParams();
  
  const { loading, error, data } = useQuery(getProductBySlugDocument, {
    variables: { slug },
  });

  if (loading) return '';
  if (error) return <p className="text-red-500">{error.message}</p>;

  const product = data?.getProductBySlug;
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="border-none shadow-none">
          <CardContent className="p-0">
            {product.images[0] && (
              <Image 
                src={product.images[0].secure_url} 
                alt={product.title}
                width={700}
                height={800}
                className="w-full rounded-lg object-cover"
              />
            )}
          </CardContent>
        </Card>

        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">{product.title}</h1>
            <div className="flex items-center gap-2 mt-2">
              <Badge variant="secondary">{product.brand}</Badge>
              <Badge variant="secondary">{product.category}</Badge>
            </div>
          </div>

          <Separator />

          <div className="space-y-4">
            <p className="text-lg text-muted-foreground">{product.description}</p>
            <p className="text-3xl font-bold">${product.price[0]}</p>
            
            <div className="flex items-center gap-2">
              <Badge variant={product.inStock ? "default" : "destructive"}>
                {product.inStock ? 'In Stock' : 'Out of Stock'}
              </Badge>
              {product.inStock && (
                <div className="flex items-center text-sm text-muted-foreground">
                  <Truck className="mr-2 h-4 w-4" />
                  Free Shipping
                </div>
              )}
            </div>
          </div>

          

          <Table>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Type</TableCell>
                <TableCell>{product.type}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Rating</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Star className="h-4 w-4 fill-current text-yellow-400" />
                    <span>{`Average Rating ${product.averageRating}`} ({product.totalReviews} total reviews)</span>
                  </div>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}

export default requireAuthentication(ProductDetailPage);