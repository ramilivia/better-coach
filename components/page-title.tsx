import { ReactNode } from "react"

type PageTitleParams = {
  children: ReactNode
}

export default function PageTitle({ children }: PageTitleParams) {
  return(
    <h1 className="text-3xl">{children}</h1>
  );
}