import { useContext, useEffect } from "react";
import { TransactionContext } from "../context/TransactionContext";
import { Card } from "../components/Card";
import { VStack } from "@chakra-ui/react";

interface CardData {
  image: string;
  name: string;
  quote: string;
}

function Home() {
  const state = useContext(TransactionContext)
  console.log("Transactions", state?.transactions);

  useEffect(() => {
    state?.addNewTransaction({
      id: 1,
      name: "petrus",
      price: 2,
      quantity: 3
    })
  }, [])

  const data: CardData = {
    image:
      "https://media.istockphoto.com/id/1368965646/photo/multi-ethnic-guys-and-girls-taking-selfie-outdoors-with-backlight-happy-life-style-friendship.jpg?s=612x612&w=0&k=20&c=qYST1TAGoQGV_QnB_vMd4E8jdaQUUo95Sa2JaKSl_-4=",
    name: "Petrus Handika",
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo repellendus? Corporis rem sunt exercitationem fuga qui, et inventore vel quas incidunt omnis neque, amet aut nostrum nihil deserunt suscipit quia!",
  };

  return (
    <VStack>
      <Card image={data.image} name={data.name} quote={data.quote} />
      {JSON.stringify(state?.transactions)}
    </VStack>
  );
}

export default Home;
