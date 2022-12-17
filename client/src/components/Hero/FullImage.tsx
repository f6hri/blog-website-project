import { Image } from "@chakra-ui/react";

export default function FullImage(props: any) {
  const { src, alt } = props;
  return <Image src={src} alt={alt} w="full" h="500" objectFit="cover" />;
}
