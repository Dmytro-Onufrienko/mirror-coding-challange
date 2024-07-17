import { IBid } from "@/modules/common/components/SearchBar/data";
import { useState } from "react";

type LogicReturn = {
  bids: IBid[];
  handleSearch: (data: IBid[]) => void;
};

export const useLogic = (): LogicReturn => {
  const [bids, setBids] = useState<IBid[]>([]);
  const handleSearch = (filteredBids: IBid[]) => {
    setBids(filteredBids);
  };

  return {
    bids,
    handleSearch,
  };
};
