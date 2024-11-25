import { ReactNode } from "react"
import { H1 } from "./ui/typography";

type PageTitleParams = {
  children: ReactNode
}

export default function PageTitle({ children }: PageTitleParams) {
  return(
    <H1 className="mb-10">Products.</H1>
  );
}