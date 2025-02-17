import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

interface PostItemProps {
  post: { id: number; title: string; body: string };
}

export const PostItem: React.FC<PostItemProps> = ({ post }) => {
  return (
    <Card className="hover:scale-105 duration-300 shadow-lg rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
      <CardHeader className="bg-blue-100 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg font-semibold text-gray-900 dark:text-white">
          {post.title.substring(0, 30)}
        </CardTitle>
      </CardHeader>
      <CardContent className="p-4">
        <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
          {post.body.substring(0, 100)}...
        </p>
        <div className="mt-4 flex justify-end">
          <Link to={`/post/${post.id}`}>
            <Button className="bg-blue-500 hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-800 text-white px-4 py-2 rounded-lg shadow-md transition-all">
              Read More
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};
