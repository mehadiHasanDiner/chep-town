import { useLoaderData } from "react-router";

const Chefs = () => {
  const chefsData = useLoaderData();

  console.log(chefsData.shortBiography);
  return <div></div>;
};

export default Chefs;
