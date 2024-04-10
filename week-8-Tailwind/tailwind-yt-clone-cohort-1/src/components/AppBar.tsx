import { SearchBar } from "./SearchBar";

export const AppBar = () => {
  return (
    <div className="flex justify-between">
      <div className="text-md pt-1 inline-flex items-center pl-4">YouTube</div>
      <div>
        <SearchBar />
      </div>
      <div className="text-md pt-1 inline-flex items-center pr-44">Logout</div>
    </div>
  );
};
