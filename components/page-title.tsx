import { H1 } from "./ui/typography";

type PageTitleParams = {
  title: string
  className?: string
}

export default function PageTitle({ title, className }: PageTitleParams) {
  return(
    <H1 className={className}>{`${title}.`}</H1>
  );
}