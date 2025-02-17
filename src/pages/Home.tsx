/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import axios from "axios";
import { PostList } from "../components/PostList";
import { SearchBar } from "../components/SearchBar";
import Container from "@/components/Container";

const Home: React.FC = () => {
  const [posts, setPosts] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 12;

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
      setPosts(response.data);
    });
  }, []);

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <Container>
      <div className="py-5">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <PostList posts={currentPosts} />

        {/* Pagination Controls */}
        <div className="flex flex-wrap justify-center mt-6 gap-2 md:gap-4">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-4 py-2 md:px-6 md:py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-200 ease-in-out disabled:bg-gray-300 disabled:cursor-not-allowed dark:bg-blue-500 dark:hover:bg-blue-400 dark:disabled:bg-gray-600 dark:text-white"
          >
            Prev
          </button>

          {/* Page numbers */}
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index + 1)}
              className={`px-4 py-2 md:px-6 md:py-3 rounded-lg shadow-md text-sm md:text-lg transition duration-200 ease-in-out ${
                currentPage === index + 1
                  ? "bg-blue-600 text-white dark:bg-blue-500 dark:text-white"
                  : "bg-white text-gray-800 dark:bg-gray-800 dark:text-white hover:bg-blue-100 dark:hover:bg-blue-700"
              }`}
            >
              {index + 1}
            </button>
          ))}

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-4 py-2 md:px-6 md:py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-200 ease-in-out disabled:bg-gray-300 disabled:cursor-not-allowed dark:bg-blue-500 dark:hover:bg-blue-400 dark:disabled:bg-gray-600 dark:text-white"
          >
            Next
          </button>
        </div>
      </div>
    </Container>
  );
};

export default Home;
