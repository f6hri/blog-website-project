import {
  Box,
  Card,
  CardBody,
  Divider,
  Flex,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";

export default function PostCard() {
  return (
    <Card rounded="0" maxW="sm" shadow="none" bg="transparent">
      <CardBody>
        <Image
          src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          alt="Green double couch with wooden legs"
        />
        <VStack mt="5" spacing="3" align="start">
          <Heading as="h3" fontSize="2xl" fontWeight="medium">
            Living room Sofa
          </Heading>
          <Text>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium
            rem mollitia autem, quam eos quos iusto aliquid, odit deserunt dolor
            modi iure quis possimus molestias cumque aliquam repellat magnam
            consequuntur.
          </Text>
          <Divider my="3" borderColor="blackAlpha.600" />
          <Flex justify="space-between" w="full">
            <HStack spacing="3">
              <Text fontSize="sm" color="blackAlpha.700">
                122 views
              </Text>
            </HStack>
            <HStack spacing="3">
              <Text fontSize="sm"  fontWeight="bold" color="blackAlpha.700">
                f6hri
              </Text>
              <Text fontSize="sm"  color="blackAlpha.700">
                12/06/22
              </Text>
            </HStack>
          </Flex>
        </VStack>
      </CardBody>
    </Card>
  );
}
