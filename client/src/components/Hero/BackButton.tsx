import { ChevronLeftIcon } from "@chakra-ui/icons";
import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function BackButton() {
  const naviage = useNavigate();
  const back = () => {
    naviage(-1);
  };
  return (
    <Button pos="absolute" top="10" left="10" onClick={back} variant="link" textColor="white">
      <ChevronLeftIcon fontSize="40" />
    </Button>
  );
}
