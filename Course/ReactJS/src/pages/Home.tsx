import { Card } from "../components/Card";

interface CardData {
  image: string;
  name: string;
  quote: string;
}

function Home() {
  const data: CardData = {
    image:
      "https://media.istockphoto.com/id/1368965646/photo/multi-ethnic-guys-and-girls-taking-selfie-outdoors-with-backlight-happy-life-style-friendship.jpg?s=612x612&w=0&k=20&c=qYST1TAGoQGV_QnB_vMd4E8jdaQUUo95Sa2JaKSl_-4=",
    name: "Petrus Handika",
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo repellendus? Corporis rem sunt exercitationem fuga qui, et inventore vel quas incidunt omnis neque, amet aut nostrum nihil deserunt suscipit quia!",
  };

  return (
    <div>
      <Card image={data.image} name={data.name} quote={data.quote} />
    </div>
  );
}

export default Home;
