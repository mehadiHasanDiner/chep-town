import { useLoaderData } from "react-router";
import ChefCard from "../components/ChefCard";
import Header from "../components/Header";

const Home = () => {
  const chefs = useLoaderData();
  return (
    <>
      <section className="w-11/12 mx-auto mt-22 mb-8 ">
        <Header></Header>
      </section>
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-4xl font-bold text-center mb-10">
          Our Best Chefs in the Town
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {chefs.map((chef) => (
            <ChefCard chef={chef} key={chef.id}></ChefCard>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
