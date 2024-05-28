import { VStack, Heading, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { api } from "../libs/Api";

function CallApi() {
  const [posts, setPosts] = useState([]);

  async function getPosts() {
    try {
      const response = await api.get("/home");
      console.log(response.data);
      setPosts(response.data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  }

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <VStack>
      <Heading>Testing API</Heading>
      {posts.map((post) => (
        <VStack key={post.id}>
          <Text>{post.title}</Text>
          <Text>{post.body}</Text>
        </VStack>
      ))}
    </VStack>
  );
}

export default CallApi;
