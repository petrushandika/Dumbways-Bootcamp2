import { VStack, Heading } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { api } from "../libs/Api";

function CallApi() {
  const [posts, setPosts] = useState([]);

  async function getPosts() {
    try {
      const response = await api.get("");
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
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </VStack>
  );
}

export default CallApi;
