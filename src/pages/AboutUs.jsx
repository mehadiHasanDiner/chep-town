import { FaUsers, FaAward, FaHeart, FaUtensils } from "react-icons/fa";
import { Link } from "react-router";

const AboutUs = () => {
  return (
    <>
      <title>About Us | Chef Town</title>

      <meta
        name="description"
        content="Learn more about Chef Town, our mission, talented chefs, and passion for delicious food."
      />

      <meta
        name="keywords"
        content="About Chef Town, Best Chefs, Food Community"
      />

      <div className="bg-base-100 min-h-screen">
        {/* Hero Section */}
        <div className="hero min-h-[60vh] bg-base-200">
          <div className="hero-content text-center">
            <div className="max-w-3xl">
              <h1 className="text-6xl font-bold color-primary mb-6">
                About Chef Town
              </h1>

              <p className="text-lg text-gray-600 leading-8">
                Chef Town is a modern culinary platform where food lovers
                discover world-class chefs, delicious recipes, and inspiring
                cooking experiences.
              </p>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="max-w-7xl mx-auto py-20 px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Card 1 */}
            <div className="card bg-base-200 shadow-lg hover:shadow-2xl transition duration-300">
              <div className="card-body items-center text-center">
                <FaUsers className="text-5xl text-primary mb-4" />

                <h2 className="card-title">Expert Chefs</h2>

                <p className="text-gray-500">
                  Meet experienced chefs from around the world.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="card bg-base-200 shadow-lg hover:shadow-2xl transition duration-300">
              <div className="card-body items-center text-center">
                <FaUtensils className="text-5xl text-secondary mb-4" />

                <h2 className="card-title">Delicious Recipes</h2>

                <p className="text-gray-500">
                  Explore hundreds of unique and tasty recipes.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="card bg-base-200 shadow-lg hover:shadow-2xl transition duration-300">
              <div className="card-body items-center text-center">
                <FaAward className="text-5xl text-warning mb-4" />

                <h2 className="card-title">Quality Service</h2>

                <p className="text-gray-500">
                  We ensure the best cooking experience for everyone.
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="card bg-base-200 shadow-lg hover:shadow-2xl transition duration-300">
              <div className="card-body items-center text-center">
                <FaHeart className="text-5xl text-error mb-4" />

                <h2 className="card-title">Food Lovers</h2>

                <p className="text-gray-500">
                  Built with love for every passionate food lover.
                </p>
              </div>
            </div>
          </div>

          {/* Story Section */}
          <div className="mt-24 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            {/* Image */}
            <div>
              <img
                src="https://images.stockcake.com/public/f/b/1/fb19e250-2549-4daf-a880-179538d0f7f2_large/chef-cooking-flambe-stockcake.jpg"
                alt="Chef Team"
                className="rounded-3xl shadow-2xl"
              />
            </div>

            {/* Content */}
            <div>
              <h2 className="text-5xl font-bold mb-6">Our Story</h2>

              <p className="text-gray-600 leading-8 text-lg mb-6">
                Chef Town started with a simple mission — bringing food lovers
                and talented chefs together in one beautiful platform.
              </p>

              <p className="text-gray-600 leading-8 text-lg">
                Whether you want to discover recipes, learn cooking techniques,
                or explore culinary inspiration, Chef Town is here to make your
                food journey unforgettable.
              </p>

              <Link
                to="/"
                className="btn bg-linear-to-r from-purple-600 to-pink-500 text-white rounded-full mt-8 px-8"
              >
                Explore Recipes
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
