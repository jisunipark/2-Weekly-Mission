import styles from "./CardImage.module.scss";
import classNames from "classnames/bind";
import Image from "next/image";
import { DEFAULT_IMAGE } from "./constant";

const cx = classNames.bind(styles);

type CardImageProps = {
  imageSource: string;
  isZoomedIn: boolean;
  alt: string;
};

export const CardImage = ({ imageSource, isZoomedIn, alt }: CardImageProps) => {
  return (
    <div className={cx("container")}>
      <Image
        src={imageSource ?? DEFAULT_IMAGE}
        fill
        className={cx("image", { zoomin: isZoomedIn })}
        alt={alt}
      />
    </div>
  );
};
