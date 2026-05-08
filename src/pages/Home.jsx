import { useLoaderData } from "react-router";
import ChefCard from "../components/ChefCard";

const Home = () => {
  const chefs = useLoaderData();
  console.log(chefs);
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-4xl font-bold text-center mb-10">Our Best Chefs</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {chefs.map((chef) => (
          <ChefCard chef={chef} key={chef.id}></ChefCard>
        ))}
      </div>
    </div>
  );
};

export default Home;
