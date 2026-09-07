import Image, { type ImageProps } from "next/image";
import { imageMeta } from "@/lib/images";
import type { ImageRef } from "@/lib/i18n/types";

type Props = Omit<ImageProps, "src" | "alt" | "width" | "height" | "blurDataURL" | "placeholder"> & {
  image: ImageRef;
};

/** next/image with explicit dimensions and a blur placeholder from lib/images.ts. */
export function Img({ image, ...rest }: Props) {
  const meta = imageMeta(image.src);
  return (
    <Image
      src={image.src}
      alt={image.alt}
      width={meta.width}
      height={meta.height}
      placeholder="blur"
      blurDataURL={meta.blurDataURL}
      {...rest}
    />
  );
}
