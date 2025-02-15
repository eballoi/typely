import { Comment } from "@/_shared/types/core";

export const fetchSuggestions = async (query: string) => {
	try {
		const response = await fetch(`/api/search?q=${query}`);
		const data: Comment[] = await response.json();
		return data.slice(0, 20);
	} catch (error) {
		console.error("Error fetching suggestions:", error);
		return [];
	}
};
