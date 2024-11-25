"use client"
import { useEffect, useState } from "react";
import { Input } from "./ui/input";
import { SearchHomeProductsQuery } from "@/lib/graphql/generated/graphql";
import { searchHomeProductsDocument } from "@/lib/graphql/queries/search-home-products";
import { fetchGraphQL } from "@/lib/graphql/fetcher";
import { P } from "./ui/typography";
import Link from "next/link";

export default function SearchBar() {

  const [searchTerm, setSearchTerm] = useState<string>('');
  const [products, setProducts] = useState<SearchHomeProductsQuery['searchHomeProducts']>([]);

  useEffect(() => {
    const fetchResults = async () => {
      const data = await fetchGraphQL<SearchHomeProductsQuery>({
        document: searchHomeProductsDocument,
        revalidate: 60,
        variables: {
          search: searchTerm
        }
      });
      console.log(data?.searchHomeProducts);
      setProducts(data?.searchHomeProducts || []);
    };

    fetchResults();
  }, [searchTerm]);
  

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return(
    <div className="w-96 relative">
      <Input 
        placeholder="Search" 
        onChange={onInputChange}
        value={searchTerm}
      />
      {products.length > 0 && (
        <ul className="absolute z-10 bg-background w-full border rounded-md p-3 mt-2">
          {products.map((product) => (
            <li 
              key={product.id} 
              className="hover:bg-muted rounded-sm transition-colors"
            >
              <Link 
                href={`/products/${product.slug}`} 
                className="block p-2"
              >
                <P>{product.title!}</P>
              </Link>
            </li>  
          ))}
        </ul>
      )}
    </div>
  );
}