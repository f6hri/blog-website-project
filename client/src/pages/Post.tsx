import { Box, Heading, HStack, Text, VStack } from "@chakra-ui/react";
import Hero from "../components/Hero";
import { Container } from "@chakra-ui/react";

const src =
  "https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

export default function Post() {
  return (
    <>
      <Hero imageSrc={src} imageAlt="hello" />
      <Container maxW="container.lg" pb="10">
        <Box>
          <Heading as="h1" fontSize="48" mt="5">
            Color us Autumn
          </Heading>
          <HStack spacing="2" mt="2">
            <Text fontSize="md" fontWeight="bold" textColor="blackAlpha.700">
              - f6hri
            </Text>
            <Text fontSize="md" textColor="blackAlpha.700">
              12.06.2022
            </Text>
          </HStack>
        </Box>
        <VStack spacing="8" mt="5">
          <Text fontSize="20" lineHeight="9">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et quod
            atque repellat quam autem cumque provident. Ut veritatis magni
            laboriosam ipsa quia architecto iste dolore, alias sed, repellendus
            perspiciatis nemo.autem cumque provident. Ut veritatis magni
            laboriosam ipsa quia architecto iste dolore.sit amet consectetur adipisicing elit. Et quod
            atque repellat quam autem cumque provident. Ut veritatis magni
            laboriosam ipsa quia architecto iste dolore, alias sed, repellendus
            perspiciatis nemo.autem cumque provident.
          </Text>
          <Text fontSize="20" lineHeight="9">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et quod
            atque repellat quam autem cumque provident. Ut veritatis magni
            laboriosam ipsa quia architecto iste dolore, alias sed, repellendus
            perspiciatis nemo.autem cumque provident. Ut veritatis magni
            laboriosam ipsa quia architecto iste dolore.sit amet consectetur adipisicing elit. Et quod
            atque repellat quam autem cumque provident. Ut veritatis magni
            laboriosam ipsa quia architecto iste dolore, alias sed, repellendus
            perspiciatis nemo.autem cumque provident.
          </Text>
          <Text fontSize="20" lineHeight="9">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et quod
            atque repellat quam autem cumque provident. Ut veritatis magni
            laboriosam ipsa quia architecto iste dolore, alias sed, repellendus
            perspiciatis nemo.autem cumque provident. Ut veritatis magni
            laboriosam ipsa quia architecto iste dolore.sit amet consectetur adipisicing elit. Et quod
            atque repellat quam autem cumque provident. Ut veritatis magni
            laboriosam ipsa quia architecto iste dolore, alias sed, repellendus
            perspiciatis nemo.autem cumque provident.
          </Text>
        </VStack>
      </Container>
    </>
  );
}
