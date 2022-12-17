import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Flex,
} from "@chakra-ui/react";
import ContainerLayout from "../../layout/ContainerLayout";
import Menu from "./Menu";

export default function FullDrawer({ isOpen, onClose }: any) {
  return (
    <Drawer placement="left" isOpen={isOpen} onClose={onClose} size="full">
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton fontSize="3xl" m="5" />
        <DrawerBody>
          <ContainerLayout>
            <Flex h="100vh" justify="center" align="center">
              <Menu onClose={onClose} />
            </Flex>
          </ContainerLayout>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}
