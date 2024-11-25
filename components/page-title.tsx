import { H1 } from "./ui/typography";

type PageTitleParams = {
  title: string
}

export default function PageTitle({ title }: PageTitleParams) {
  return(
    <H1 className="mb-12">{`${title}.`}</H1>
  );
}