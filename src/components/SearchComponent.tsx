import { AiOutlineSearch } from "@react-icons/all-files/ai/AiOutlineSearch";
import { useState } from "react";
import { useAppDispatch } from "../app/hook";
import { setSearch } from "../redux/slices/paginationSlice";

const SearchComponent = () => {
  const [textSearch,setTextSearch] = useState('');
  const dispatch = useAppDispatch();
  const handleSearchChange = (e) => {
    setTextSearch(e.target.value);
  };
  const handleSearchSubmit = (e)=>{
    e.preventDefault();
    dispatch(setSearch(textSearch))
    console.log('text search: ',textSearch);
    setTextSearch('')
  }
  return (
    <div className="w-64 relative rounded-full shadow-md">
      <form action="" onSubmit={handleSearchSubmit}>
      <input
        type="text"
        placeholder="search..."
        value={textSearch}
        className="rounded-full p-1 outline-none w-full"
        onChange={handleSearchChange}
      />
      <button
        className="text-2xl absolute top-2/4 text-gray-400 right-0 -translate-x-2/4 -translate-y-2/4"
        type="submit"
      >
        <AiOutlineSearch />
      </button>
      </form>
    </div>
  );
};

export default SearchComponent;
