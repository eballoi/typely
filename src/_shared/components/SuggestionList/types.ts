import { Comment } from "@/_shared/types/core";

export interface SuggestionListProps {
	suggestions: Comment[];
	setQuery: (e: string) => void;
	onSearch: () => void;
	setSuggestions: (e: Comment[]) => void;
}
