
import React from "react";
import { Link, useParams } from "react-router-dom";
import { Calendar, User, ArrowLeft } from "lucide-react";
import blogData from "../assets/Blog.json";
import SEO from "../components/SEO/SEO";
import GirlImage from "../assets/girl1.png";
import Creditimage from "../assets/credit.png";

const BlogDetails = () => {
  const { id } = useParams();

  const blog = blogData.find(
    (post) => String(post.id) === String(id)
  );

  // Select the correct image for each article.
  const getBlogImage = (post) => {
    const imagePath = (post.image_url || "").toLowerCase();

    if (imagePath.includes("credit")) {
      return Creditimage;
    }

    if (imagePath.includes("girl")) {
      return GirlImage;
    }

    return post.image_url || GirlImage;
  };

  if (!blog) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold">Blog not found</h2>

        <Link
          to="/blog"
          className="mt-4 text-blue-500"
        >
          Back to All Articles
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen font-[Futura,Trebuchet_MS,Arial,sans-serif]">
      <SEO
        title={`${blog.title} | Moin Consultancy`}
        description={blog.summary}
        url={`/blog/${blog.id}`}
        siteName="Moin Consultancy"
        type="article"
      />

      {/* Image Only - No Text or Overlay */}
      <div className="relative h-[280px] md:h-[380px] overflow-hidden">
        <img
          src={getBlogImage(blog)}
          alt={blog.title || "Moin Consultancy blog"}
          className={`w-full h-full object-cover ${
            (blog.image_url || "").toLowerCase().includes("girl")
              ? "object-[center_25%]"
              : "object-center"
          }`}
          onError={(event) => {
            event.currentTarget.onerror = null;
            event.currentTarget.src = GirlImage;
          }}
        />
      </div>

      {/* Full Article */}
      <article className="relative bg-white rounded-t-3xl max-w-6xl mx-auto -mt-10 z-20 p-6 md:p-12 shadow-lg">
        <Link
          to="/blog"
          className="inline-flex items-center gap-3 text-[#A202F0] font-semibold text-lg mb-10"
        >
          <ArrowLeft size={22} />
          Back to All Articles
        </Link>

        {/* Blog Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          {blog.title}
        </h1>

        {/* Author and Date */}
        <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8">
          <span className="flex items-center gap-2">
            <User size={19} />
            {blog.author_name || "Moin Consultancy"}
          </span>

          {blog.publish_date && (
            <span className="flex items-center gap-2">
              <Calendar size={19} />
              {new Date(
                `${blog.publish_date}T00:00:00`
              ).toLocaleDateString("en-IN", {
                day: "2-digit",
                month: "short",
                year: "numeric",
              })}
            </span>
          )}
        </div>

        {/* Blog Summary */}
        <div className="bg-gray-50 border-l-4 border-indigo-500 p-6 rounded-r-xl mb-8">
          <p className="text-lg md:text-xl italic text-gray-700 leading-relaxed">
            {blog.summary}
          </p>
        </div>

        {/* Article Sections */}
        {Array.isArray(blog.content) &&
          blog.content.map((section, index) => (
            <section key={index} className="mb-8">
              {section.heading && (
                <h2 className="text-2xl font-bold text-[#A202F0] mb-4">
                  {section.heading}
                </h2>
              )}

              {section.paragraphs?.map(
                (paragraph, paragraphIndex) => (
                  <p
                    key={paragraphIndex}
                    className="text-gray-700 text-lg leading-8 mb-4"
                  >
                    {paragraph}
                  </p>
                )
              )}

              {section.bullets && (
                <ul className="list-disc pl-6 space-y-2 text-gray-700 text-lg">
                  {section.bullets.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}
      </article>
    </div>
  );
};

export default BlogDetails;
