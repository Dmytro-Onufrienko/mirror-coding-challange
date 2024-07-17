"use client";

import { FC } from "react";
import { Solicitation } from "./data";
import { Button } from "@modules/common/ui/button";
import { Input } from "@modules/common/ui/input";
import Spinner from "../Spiner";
import { useLogic } from "./useLogic";

interface ISearchBarProps {
  onSearch: (data: Solicitation[]) => void;
}

const SearchBar: FC<ISearchBarProps> = ({ onSearch }) => {
  const { searchTerm, isSearching, handleChange, handleClear } = useLogic({
    onSearch,
  });

  return (
    <div className="flex flex-col gap-4">
      <span className="text-2xl font-medium">Bid Dashboard</span>
      <div className="flex gap-4 items-center">
        <Input
          placeholder="Enter a Bid ID"
          className="w-full"
          value={searchTerm}
          onChange={handleChange}
        />
        <Button onClick={handleClear}>Clear</Button>
        {isSearching && (
          <div className="bg-white-blur top-0 left-0 absolute h-screen w-screen z-50 flex items-center justify-center">
            <Spinner />
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
