
import { useState, useEffect } from "react";
import blogData from "../assets/Blog.json";

const useBlogData = (limit = null) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      if (!Array.isArray(blogData)) {
        throw new Error("Blog data is not an array.");
      }

      const sortedData = [...blogData].sort((a, b) => {
        return (
          new Date(b.publish_date || 0).getTime() -
          new Date(a.publish_date || 0).getTime()
        );
      });

      const finalData =
        typeof limit === "number" && limit > 0
          ? sortedData.slice(0, limit)
          : sortedData;

      setData(finalData);
      setError(null);
    } catch (err) {
      console.error("Failed to load blog data:", err);
      setError(err.message || "Failed to load blog data.");
      setData([]);
    } finally {
      setLoading(false);
    }
  }, [limit]);

  return { data, loading, error };
};

export default useBlogData;
