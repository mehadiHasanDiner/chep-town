import { FaReact, FaCode, FaUtensils, FaArrowRight } from "react-icons/fa";

const blogs = [
  {
    id: 1,
    title: "Why React is So Popular in 2025",
    description:
      "Discover why developers still love React for building fast and scalable web applications.",
    icon: <FaReact />,
    date: "12 Aug 2025",
  },

  {
    id: 2,
    title: "Top 10 Cooking Tips from Professional Chefs",
    description:
      "Learn some amazing kitchen secrets from world-class chefs and improve your cooking skills.",
    icon: <FaUtensils />,
    date: "15 Aug 2025",
  },

  {
    id: 3,
    title: "How to Build Beautiful UI with Tailwind CSS",
    description:
      "Tailwind CSS makes frontend development fast and enjoyable. Learn practical tips here.",
    icon: <FaCode />,
    date: "18 Aug 2025",
  },
];

const Blogs = () => {
  return (
    <>
      <title>Blogs | Chef Town</title>

      <meta
        name="description"
        content="Read the latest blogs about cooking, React development, and modern web design on Chef Town."
      />

      <meta
        name="keywords"
        content="Chef Town Blogs, React Blogs, Cooking Blogs, Tailwind CSS"
      />

      <div className="bg-base-200 min-h-screen py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-14">
            <h1 className="text-5xl font-bold color-primary mb-6 py-2">
              Our Latest Blogs
            </h1>

            <p className="text-gray-500 max-w-2xl mx-auto">
              Explore modern web development, cooking tips, and trending
              technology articles from Chef Town.
            </p>
          </div>

          {/* Blog Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <div
                key={blog.id}
                className="card bg-base-100 shadow-xl hover:shadow-2xl transition duration-300 border border-gray-100"
              >
                <div className="card-body">
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-full bg-pink-100 flex items-center justify-center text-pink-700 text-3xl mb-4">
                    {blog.icon}
                  </div>

                  {/* Date */}
                  <p className="text-sm text-gray-400">{blog.date}</p>

                  {/* Title */}
                  <h2 className="card-title text-2xl font-bold">
                    {blog.title}
                  </h2>

                  {/* Description */}
                  <p className="text-gray-500 leading-7">{blog.description}</p>

                  {/* Button */}
                  <div className="card-actions mt-5">
                    <button className="btn bg-linear-to-r from-purple-600 to-pink-500 border text-white rounded-full">
                      Read More
                      <FaArrowRight />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Blogs;
