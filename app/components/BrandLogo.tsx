import Image from "next/image";
import { publicAssetUrl } from "../lib/public-assets";

const logoSources = {
  blue: publicAssetUrl("images/about/brand/version bleu.png"),
  white: publicAssetUrl("images/about/brand/version blanche.png"),
};

export default function BrandLogo({
  variant,
  priority = false,
}: {
  variant: keyof typeof logoSources;
  priority?: boolean;
}) {
  return (
    <Image
      alt=""
      aria-hidden="true"
      className="brand-official-logo"
      height={56}
      loading={priority ? "eager" : "lazy"}
      src={logoSources[variant]}
      width={200}
    />
  );
}
