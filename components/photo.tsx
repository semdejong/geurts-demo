import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  w: number;
  h: number;
  className?: string;
  preload?: boolean;
  sizes?: string;
  fit?: "intrinsic" | "cover";
};

/** Respecteert de native breedte: foto's smaller dan 1000px worden niet vergroot. */
export function Photo({ src, alt, w, h, className = "", preload = false, sizes, fit = "intrinsic" }: Props) {
  const small = w < 1000;
  if (fit === "cover") {
    return (
      <Image
        src={src}
        alt={alt}
        width={w}
        height={h}
        preload={preload}
        unoptimized={small}
        sizes={sizes ?? "240px"}
        className={`photo-grade h-full w-full object-cover ${className}`}
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={w}
      height={h}
      preload={preload}
      unoptimized={small}
      sizes={sizes ?? (small ? `${w}px` : "(max-width: 768px) 92vw, 720px")}
      className={`photo-grade h-auto max-w-full ${className}`}
      style={{ width: "100%", maxWidth: w, height: "auto" }}
    />
  );
}
