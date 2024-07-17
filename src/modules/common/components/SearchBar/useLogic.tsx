import { useState, ChangeEvent, useEffect } from "react";
import { useDebounce } from "use-debounce";
import { IBid, solicitations } from "./data";

type UseLogicProps = {
  onSearch: (data: IBid[]) => void;
};

export const useLogic = ({ onSearch }: UseLogicProps) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [isSearching, setIsSearching] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setIsSearching(true);
    setSearchTerm(e.target.value);
  };

  const handleSearch = () => {
    const filteredSolicitations = solicitations.filter((solicitation) =>
      solicitation.id.toLowerCase().includes(searchTerm.toLowerCase())
    );
    onSearch(filteredSolicitations);
    setIsSearching(false);
  };

  const [debouncedSearchTerm] = useDebounce(searchTerm, 300);

  useEffect(() => {
    handleSearch();
  }, [debouncedSearchTerm]);

  const handleClear = () => setSearchTerm("");

  return { searchTerm, isSearching, handleChange, handleClear };
};
