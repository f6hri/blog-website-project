import {
  Box,
  Card,
  CardBody,
  HStack,
  Skeleton,
  SkeletonText,
} from "@chakra-ui/react";

export function PostsSkeleton() {
  return (
    <HStack wrap="wrap">
      {Array(20).fill(0).map((_, i) => (
        <Card
          key={i}
          rounded="0"
          w="400px"
          shadow="none"
          bg="transparent"
        >
          <CardBody>
            <Skeleton w="full" h="200" />
            <SkeletonText mt="4" noOfLines={4} spacing="4" skeletonHeight="2" />
          </CardBody>
        </Card>
      ))}
    </HStack>
  );
}
