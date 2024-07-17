import { useState, ChangeEvent, useEffect } from "react";
import { useDebounce } from "use-debounce";
import { Solicitation, solicitations } from "./data";

type UseLogicProps = {
  onSearch: (data: Solicitation[]) => void;
}

export const useLogic = ({ onSearch }: UseLogicProps) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [isSearching, setIsSearching] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log('start')
    setIsSearching(true);
    setSearchTerm(e.target.value)
  }

  const handleSearch = () => {
    const filteredSolicitations = solicitations.filter((solicitation) =>
      solicitation.id.toLowerCase().includes(searchTerm.toLowerCase())
    );
    onSearch(filteredSolicitations);
    setIsSearching(false);
    console.log('end')
  };

  const [debouncedSearchTerm] = useDebounce(searchTerm, 1000);

  useEffect(() => {
    handleSearch();
  }, [debouncedSearchTerm]);

  const handleClear = () => setSearchTerm('')

  return { searchTerm, isSearching, handleChange, handleClear };
}
