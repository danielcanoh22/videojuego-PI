export const GameImage = ({
  image,
  title,
  styles,
}: {
  image: string;
  title: string;
  styles?: string;
}) => {
  return <img src={image} alt={title} className={styles} />;
};
