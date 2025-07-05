type GameImageProps = {
  image: string;
  title: string;
  styles?: string;
};

export const GameImage = ({ image, title, styles }: GameImageProps) => {
  return <img src={image} alt={title} className={styles} />;
};
