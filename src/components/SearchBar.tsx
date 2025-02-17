import React from "react";
import { Input } from "@/components/ui/input";

interface SearchBarProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  searchTerm,
  setSearchTerm,
}) => {
  return (
    <div className="mb-4 flex justify-center">
      <Input
        type="text"
        placeholder="Search posts..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full p-3 text-lg border rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 ease-in-out dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:focus:ring-blue-400 dark:focus:border-blue-400"
      />
    </div>
  );
};
