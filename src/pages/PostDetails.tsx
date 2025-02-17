// pages/PostDetails.tsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const PostDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<{ title: string; body: string } | null>(
    null
  );

  console.log(post);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => {
        setPost(response.data);
      });
  }, [id]);

  if (!post) return <p>Loading...</p>;

  return (
    <div className=" mx-auto mt-8 px-4">
      <Card className="p-6 bg-white dark:bg-gray-800 shadow-lg rounded-xl">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-gray-800 dark:text-white">
            {post.title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            {post.body}
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            {post.body}
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            {post.body}
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default PostDetails;
