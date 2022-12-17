import { Box } from "@chakra-ui/react";
import ContainerLayout from "./ContainerLayout";

export default function MainLayout({ children }: any) {
  return (
    <Box as="main">
      <ContainerLayout>{children}</ContainerLayout>
    </Box>
  );
}
