import { FC } from "react";
import { SearchInput } from "../SearchInput";
import { SuggestionList } from "../SuggestionList";
import { NavbarProps } from "./types";

export const Navbar: FC<NavbarProps> = ({
	query,
	setQuery,
	handleSearch,
	suggestions,
	setSuggestions,
}) => {
	return (
		<nav className="bg-[#41ead4] shadow-md fixed top-0 left-0 w-full p-4 z-50">
			<div className="max-w-4xl mx-auto flex justify-center items-center">
				<div className="relative w-80">
					<SearchInput
						value={query}
						onChange={(e) => setQuery(e.target.value)}
						onSearch={handleSearch}
					/>
					<SuggestionList
						suggestions={suggestions}
						setSuggestions={setSuggestions}
						setQuery={setQuery}
						onSearch={handleSearch}
					/>
				</div>
			</div>
		</nav>
	);
};
