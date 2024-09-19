const TitlePrimary = ({ title }: { title: string }) => {
  return <h1>{title}</h1>;
};

const TitleSecondary = ({
  title,
  styles,
}: {
  title: string;
  styles: string;
}) => {
  return <h2 className={`text-5xl font-bold ${styles}`}>{title}</h2>;
};

export { TitlePrimary, TitleSecondary };
