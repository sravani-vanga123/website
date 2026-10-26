
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Calendar, User } from "lucide-react";
import useBlogData from "../hooks/useBlogData";
import SEO from "../components/SEO/SEO";
import GirlImage from "../assets/girl1.png";
import Creditimage from "../assets/credit.png";

const POSTS_PER_PAGE = 9;

const Blog = () => {
  const { data: posts, loading, error } = useBlogData();
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);

  useEffect(() => {
    setCurrentPage(1);
  }, [posts.length]);

  const currentPosts = posts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  // Select the correct image for each blog post.
  const getBlogImage = (post) => {
    const imagePath = (post.image_url || "").toLowerCase();

    if (imagePath.includes("credit")) {
      return Creditimage;
    }

    if (imagePath.includes("girl")) {
      return GirlImage;
    }

    return imagePath || GirlImage;
  };

  return (
    <div className="min-h-screen bg-[#F8F9FB] font-[Futura,Trebuchet_MS,Arial,sans-serif]">
      <SEO
        title="Blog | Moin Consultancy"
        description="Explore the latest articles, education updates, study abroad guidance, and insights from Moin Consultancy."
        url="/blog"
        siteName="Moin Consultancy"
      />

      {/* Page Heading */}
      <section className="bg-white border-b border-gray-200 py-10">
        <div className="container mx-auto px-6">
          <p className="text-sm text-gray-500 mb-3">
            <Link
              to="/"
              className="hover:text-[#A202F0] transition-colors"
            >
              Home
            </Link>
            {" "}• Blog
          </p>

          <h1 className="text-3xl md:text-4xl font-bold text-[#25252B]">
            Our Blog
          </h1>

          <p className="mt-3 text-gray-600 text-base md:text-lg">
            Explore our latest Blogs.
          </p>
        </div>
      </section>

      {/* Blog Cards */}
      <section className="container mx-auto px-6 py-16">
        {loading ? (
          <div className="text-center py-20 text-gray-500">
            Loading blog posts...
          </div>
        ) : error ? (
          <div className="text-center py-20">
            <h2 className="text-2xl font-bold text-[#25252B]">
              Unable to load blog posts
            </h2>
            <p className="mt-3 text-gray-500">{error}</p>
          </div>
        ) : currentPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {currentPosts.map((post) => (
              <article
                key={post.id}
                className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300"
              >
                {/* Blog Image */}
                <Link
                  to={`/blog/${post.id}`}
                  className="block relative w-full h-64 md:h-72 overflow-hidden bg-gray-100"
                  aria-label={`Read ${post.title || "blog article"}`}
                >
                 

<img
  src={getBlogImage(post)}
  alt={post.title || "Moin Consultancy blog"}
  loading="lazy"
  className={`absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${
    (post.image_url || "").toLowerCase().includes("girl")
      ? "object-[center_20%]"
      : "object-center"
  }`}
  onError={(event) => {
    event.currentTarget.onerror = null;
    event.currentTarget.src = GirlImage;
  }}
/>



                  {/* Category */}
                  {post.category && (
                    <span className="absolute top-6 left-6 bg-[#A202F0] text-white rounded-full px-5 py-2 text-sm font-bold shadow-md">
                      {post.category}
                    </span>
                  )}
                </Link>

                {/* Blog Content */}
                <div className="p-6 md:p-8">
                  <h2 className="text-2xl md:text-3xl font-bold leading-tight text-[#25252B] transition-colors duration-300 group-hover:text-[#A202F0]">
                    <Link
                      to={`/blog/${post.id}`}
                      className="focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A202F0] rounded"
                    >
                      {post.title}
                    </Link>
                  </h2>

                  {/* Blog Summary */}
                  <p className="mt-4 text-base md:text-lg leading-8 text-gray-600 line-clamp-3">
                    {post.summary}
                  </p>

                  {/* Author and Date */}
                  <div className="mt-8 pt-6 border-t border-gray-100 flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-2 text-gray-500">
                      <User
                        size={19}
                        className="text-[#A202F0]"
                      />
                      <span>
                        {post.author_name || "Moin Consultancy"}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 text-gray-500">
                      <Calendar size={19} />
                      <span>
                        {post.publish_date
                          ? new Date(
                              `${post.publish_date}T00:00:00`
                            ).toLocaleDateString("en-IN", {
                              day: "2-digit",
                              month: "short",
                              year: "numeric",
                            })
                          : ""}
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <h2 className="text-2xl font-bold text-[#25252B]">
              No blog posts available
            </h2>
            <p className="mt-3 text-gray-500">
              Please check your Blog.json data and useBlogData hook.
            </p>
          </div>
        )}

        {/* Pagination */}
        {!loading && !error && totalPages > 1 && (
          <div className="flex flex-wrap justify-center items-center gap-3 mt-12">
            <button
              type="button"
              onClick={() =>
                setCurrentPage((page) => Math.max(1, page - 1))
              }
              disabled={currentPage === 1}
              className="px-5 py-2 rounded-lg border border-gray-200 bg-white text-[#25252B] hover:bg-[#A202F0] hover:text-white disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            >
              Previous
            </button>

            {Array.from(
              { length: totalPages },
              (_, index) => index + 1
            ).map((page) => (
              <button
                type="button"
                key={page}
                onClick={() => {
                  setCurrentPage(page);
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  });
                }}
                className={`w-10 h-10 rounded-lg font-semibold transition-colors ${
                  currentPage === page
                    ? "bg-[#A202F0] text-white"
                    : "bg-white border border-gray-200 text-[#25252B] hover:bg-purple-50 hover:text-[#A202F0]"
                }`}
              >
                {page}
              </button>
            ))}

            <button
              type="button"
              onClick={() =>
                setCurrentPage((page) =>
                  Math.min(totalPages, page + 1)
                )
              }
              disabled={currentPage === totalPages}
              className="px-5 py-2 rounded-lg border border-gray-200 bg-white text-[#25252B] hover:bg-[#A202F0] hover:text-white disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            >
              Next
            </button>
          </div>
        )}
      </section>
    </div>
  );
};

export default Blog;
