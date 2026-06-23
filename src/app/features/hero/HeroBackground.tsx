import Image from "next/image";

type HeroBackgroundProps = {
  image?: {
    asset?: { url: string };
    alt?: string;
  };
  mobileImage?: {
    asset?: { url: string };
  };
};

export function HeroBackground({ image, mobileImage }: HeroBackgroundProps) {
  const desktopUrl = image?.asset?.url;
  const mobileUrl = mobileImage?.asset?.url ?? desktopUrl;

  if (!desktopUrl && !mobileUrl) {
    return null;
  }

  return (
    <>
      {mobileUrl && (
        <Image
          src={mobileUrl}
          alt={image?.alt ?? ""}
          fill
          priority
          className="object-cover sm:hidden"
        />
      )}

      {desktopUrl && (
        <Image
          src={desktopUrl}
          alt={image?.alt ?? ""}
          fill
          priority
          className="object-cover hidden sm:block"
        />
      )}
    </>
  );
}
