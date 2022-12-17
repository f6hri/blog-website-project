import { Box, Flex, Tab, TabList, Tabs, useDisclosure } from "@chakra-ui/react";
import ContainerLayout from "../../layout/ContainerLayout";
import FullDrawer from "../FullDrawer";
import Brand from "./Brand";
import ContactButton from "./ContactButton";
import MenuButton from "./MenuButton";

export default function Navbar() {
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <Box as="header" py="10">
      <ContainerLayout>
        <Flex justify="space-between" align="center">
          <Flex align="center" gap="5">
            <MenuButton onClick={onOpen} />
            <Brand />
          </Flex>
          <ContactButton />
        </Flex>
      </ContainerLayout>
      <FullDrawer isOpen={isOpen} onClose={onClose} />
    </Box>
  );
}
