import React from "react";
import { PostItem } from "./PostItem";

interface Post {
  id: number;
  title: string;
  body: string;
}

interface PostListProps {
  posts: Post[];
}

export const PostList: React.FC<PostListProps> = ({ posts }) => {
  return (
    <div className="grid dark:bg-gray-900 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {posts.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </div>
  );
};
