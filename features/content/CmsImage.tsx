import Image, { ImageProps } from 'next/image';

import { IImage } from '../../shared/types/contentful';

type Props = {
  image: IImage;
} & Omit<ImageProps, 'src' | 'alt'>;

export default function CmsImage({ image, ...imageProps }: Props) {
  const src = getImageSrc(image);
  return <Image {...imageProps} src={src} alt={image.fields.title} />;
}

function getImageSrc(image: IImage) {
  return `https:${image.fields.image.fields.file.url}`;
}
