import { Comment } from "@/_shared/types/core";
import { useEffect, useState } from "react";
import { fetchSuggestions } from "../api/fetchSuggestions";

export const useSearch = (initialResults: Comment[]) => {
	const [query, setQuery] = useState<string>("");
	const [results, setResults] = useState<Comment[]>(initialResults);
	const [suggestions, setSuggestions] = useState<Comment[]>([]);
	const [loading, setLoading] = useState<boolean>(false);

	useEffect(() => {
		if (query.length === 0) {
			setResults(initialResults);
		}
		if (query.length < 2) {
			setSuggestions([]);
			return;
		}

		const delayDebounce = setTimeout(async () => {
			const res = await fetchSuggestions(query);
			setSuggestions(res.slice(0, 10));
		}, 300);
		return () => clearTimeout(delayDebounce);
	}, [query]);

	const handleSearch = async () => {
		if (query.length < 2) return;
		setLoading(true);
		try {
			const data = await fetchSuggestions(query);
			setResults(data);
			setSuggestions([]);
			window.scrollTo({ top: 0, behavior: "smooth" });
		} catch (error) {
			console.error("Error fetching search results:", error);
		} finally {
			setLoading(false);
		}
	};

	return {
		query,
		setQuery,
		setResults,
		results,
		suggestions,
		setSuggestions,
		loading,
		handleSearch,
	};
};
