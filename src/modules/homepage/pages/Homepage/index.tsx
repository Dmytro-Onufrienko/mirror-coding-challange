"use client";

import BidTable from "@/modules/bid/components/BidTable";
import SearchBar from "@/modules/common/components/SearchBar";
import { Solicitation } from "@/modules/common/components/SearchBar/data";
import { FC, useState } from "react";

const Homepage: FC = () => {
  const [bids, setBids] = useState<Solicitation[]>([]);
  const handleSearch = (data: Solicitation[]) => {
    setBids(data);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="bg-white w-[1100px] p-8 rounded flex flex-col gap-4">
        <SearchBar onSearch={handleSearch} />
        <BidTable bids={bids} />
      </div>
    </main>
  );
};

export default Homepage;
