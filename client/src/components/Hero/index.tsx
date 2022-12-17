import { Box } from "@chakra-ui/react";
import BackButton from "./BackButton";
import FullImage from "./FullImage";

export default function Hero(props: any) {
  const { imageSrc, imageAlt } = props;
  return (
    <Box pos="relative">
      <BackButton />
      <FullImage src={imageSrc} alt={imageAlt} />
    </Box>
  );
}
