import { Comment } from "@/_shared/types/core";

export interface NavbarProps {
	suggestions: Comment[];
	query: string;
	handleSearch: () => void;
	setQuery: (e: string) => void;
	setSuggestions: (e: Comment[]) => void;
}
