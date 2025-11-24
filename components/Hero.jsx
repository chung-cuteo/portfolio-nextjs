import Image from "next/image";

const Hero = ({ src,alt  }) => {
  return (
    <Image
      src={src}
      alt={alt || "hero image"}
      width="1440"
      height="300"
      className="absolute w-full top-0 right-0 left-0 z-[-1] h-[300px] object-cover"
    />
  );
};

export default Hero;
