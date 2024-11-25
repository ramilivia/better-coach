"use client"
import { useEffect, useState } from "react";
import { Input } from "./ui/input";
import { SearchHomeProductsQuery } from "@/lib/graphql/generated/graphql";
import { searchHomeProductsDocument } from "@/lib/graphql/queries/search-home-products";
import { fetchGraphQL } from "@/lib/graphql/fetcher";
import { P } from "./ui/typography";

export default function SearchBar() {

  const [searchTerm, setSearchTerm] = useState('');
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
      <Input placeholder="Search" onChange={onInputChange}></Input>
      {products.length > 0 && (
        <ul className="absolute z-10 bg-background w-full border border-primary rounded-md p-3 mt-2">
          {products.map((product) => (
            <li key={product.id}>
              <P>{product.title!}</P>
            </li>  
          ))}
        </ul>
      )}
    </div>
  );
}