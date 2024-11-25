import Image from "next/image";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { P } from "./ui/typography";
import { Button } from "./ui/button";
import Link from "next/link";

type ProductCardParams = {
  slug: string;
  imageUrl: string;
  title: string;
  description: string;
  price: number;
  priority?: boolean;
};

export default function ProductCard({ 
  slug, 
  imageUrl, 
  title, 
  description, 
  price,
}: ProductCardParams) {

  return (
    <Card className="h-[410px] border-white" >
      <CardHeader className="h-2/5 p-2 mb-4">
        <div className="relative w-full h-full">
          <Link href={slug}>
            <img
              src={imageUrl}
              alt={title}
              className="object-cover rounded-md w-full h-full"
            />
          </Link>
        </div>
      </CardHeader>
      <CardContent className="h-2/5">
        <P className="text-md text-muted-foreground italic line-clamp-4 max-h-[200px] overflow-hidden text-ellipsis">
          {description}
        </P>
      </CardContent>
      <CardFooter className="flex-wrap justify-between h-1/5">
      <Link href={slug}>
          <Button>More Details</Button>
        </Link>
        <P className="font-semibold mt-0 text-lg">
          {`${price} €`}
        </P>
      </CardFooter>
    </Card>
  );
}