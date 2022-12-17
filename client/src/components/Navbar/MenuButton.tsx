import { Button, useDisclosure } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

export default function MenuButton({ onClick }: any) {
  return (
    <Button size="lg" variant="link" textDecor="none" onClick={onClick}>
      <HamburgerIcon fontSize="40" />
    </Button>
  );
}
