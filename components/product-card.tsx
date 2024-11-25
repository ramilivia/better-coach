import Image from "next/image";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { H4, Large, Lead, P } from "./ui/typography";
import { Button } from "./ui/button";
import Link from "next/link";

type ProductCardParams = {
  slug: string;
  imageUrl: string;
  title: string;
  description: string;
  price: number;
};

export default function ProductCard({ slug, imageUrl, title, description, price }: ProductCardParams) {

  return (
    <Card className="h-[410px]" >
      <CardHeader className="h-2/5 p-0 mb-4">
        <div className="relative w-full h-full">
          <Link href={slug}>
            <Image
              src={imageUrl}
              alt={title}
              fill
              className="object-cover"
            />
          </Link>
        </div>
      </CardHeader>
      <CardContent className="h-2/5">
        <P className="text-lg text-muted-foreground italic line-clamp-4 max-h-[200px] overflow-hidden text-ellipsis">
          {description}
        </P>
      </CardContent>
      <CardFooter className="flex-wrap justify-between h-1/5">
        <P className="font-semibold mt-0">
          {`${price} €`}
        </P>
        <Link href={slug}>
          <Button>More Details</Button>
        </Link>
      </CardFooter>
    </Card>
  );
}