import Image from "next/image";

type HeroBackgroundProps = {
  image?: {
    asset?: { url: string };
    alt?: string;
  };
};

export function HeroBackground({ image }: HeroBackgroundProps) {
  if (!image?.asset?.url) {
    return null;
  }

  return <Image src={image.asset.url} alt={image.alt ?? ""} fill priority />;
}
