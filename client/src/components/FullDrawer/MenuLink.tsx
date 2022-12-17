import { useNavigate } from "react-router-dom";
import { Button, Text, useDisclosure } from "@chakra-ui/react";

export default function MenuLink({ href, title, onClose }: any) {
  const route = useNavigate();
  const submit = () => {
    route(href);
    onClose();
  };
  return (
    <Button
      variant="link"
      onClick={() => {
        submit();
      }}
    >
      <Text fontSize="4xl" fontWeight="light">{title}</Text>
    </Button>
  );
}
