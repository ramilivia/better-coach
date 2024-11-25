"use client"
import { useEffect, useState } from "react";
import { Input } from "./ui/input";
import { SearchHomeProductsQuery } from "@/lib/graphql/generated/graphql";
import { searchHomeProductsDocument } from "@/lib/graphql/queries/search-home-products";
import { P } from "./ui/typography";
import Link from "next/link";
import { X } from "lucide-react";
import { useLazyQuery } from "@apollo/client";

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const [executeSearch, { data }] = useLazyQuery<SearchHomeProductsQuery>(searchHomeProductsDocument);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchTerm) {
        executeSearch({ variables: { search: searchTerm } });
      }
    }, 350);

    return () => clearTimeout(timer);
  }, [searchTerm, executeSearch]);

  const products = searchTerm ? (data?.searchHomeProducts || []) : [];

  return(
    <div className="w-full sm:w-96 mt-6 sm:mt-2 sm:relative">
      <div className="relative">
        <Input 
          placeholder="Search" 
          onChange={(e) => setSearchTerm(e.target.value)}
          value={searchTerm}
          className="pr-8"
        />
        {searchTerm && (
          <button
            onClick={() => setSearchTerm('')}
            className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">
            <X size={16} />
          </button>
        )}
      </div>
      {searchTerm && products.length > 0 && (
        <ul className="absolute z-10 bg-background w-full border rounded-md p-3 mt-2">
          {products.map((product) => (
            <li key={product.id} className="hover:bg-muted rounded-sm transition-colors">
              <Link href={`/products/${product.slug}`} className="block p-2">
                <P>{product.title!}</P>
              </Link>
            </li>  
          ))}
        </ul>
      )}
    </div>
  );
}