import { StackDivider, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import MenuLink from "./MenuLink";

export default function Menu({ onClose }: any) {
  return (
    <VStack spacing="6" divider={<StackDivider borderColor="gray.200" />}>
      <MenuLink onClose={onClose} href="/" title="Ana Sayfa" />
      <MenuLink onClose={onClose} href="/" title="Hakkımızda" />
      <MenuLink onClose={onClose} href="/" title="İletişim" />
    </VStack>
  );
}
