import { Container } from "@chakra-ui/react";

export default function ContainerLayout({ children }: any) {
  return (
    <Container maxW="container.xl">
      {children}
    </Container>
  );
}
