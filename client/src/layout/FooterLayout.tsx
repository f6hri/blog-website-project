import { Box } from "@chakra-ui/react";
import ContainerLayout from "./ContainerLayout";

export default function FooterLayout({ children }: any) {
  return (
    <Box as="footer">
      <ContainerLayout>footer</ContainerLayout>
    </Box>
  );
}
