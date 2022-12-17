import {
  Flex,
  Tabs,
  Tab,
  TabList,
  TabPanels,
  TabPanel,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import PostCard from "../components/PostCard";
import { PostsSkeleton } from "../components/Skelaton/PostsSkeleton";

export default function Posts() {
  const [posts, getPosts] = useState(false);
  const sleep = (ms: number) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };
  useEffect(() => {
    sleep(3000).then(() => {
      getPosts(true);
    });
  });
  return (
    <>
      {posts ? (
        <Tabs colorScheme='blackAlpha' isLazy>
          <TabList overflow="scroll" overflowY="hidden">
            <Tab fontSize="sm">
              Latest
            </Tab>
            <Tab fontSize="sm">
              Development
            </Tab>
            <Tab fontSize="sm">
              Desing
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Flex justify="space-evenly" alignContent="stretch" wrap="wrap">
                {Array(1)
                  .fill(0)
                  .map((_, i) => (
                    <PostCard key={i} />
                  ))}
              </Flex>
            </TabPanel>
            <TabPanel>
              <Flex justify="space-evenly" alignContent="stretch" wrap="wrap">
                {Array(3)
                  .fill(0)
                  .map((_, i) => (
                    <PostCard key={i} />
                  ))}
              </Flex>
            </TabPanel>
            <TabPanel>
              <Flex justify="space-evenly" alignContent="stretch" wrap="wrap">
                {Array(10)
                  .fill(0)
                  .map((_, i) => (
                    <PostCard key={i} />
                  ))}
              </Flex>
            </TabPanel>
          </TabPanels>
        </Tabs>
      ) : (
        <PostsSkeleton />
      )}
    </>
  );
}
