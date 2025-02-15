import { FC, useEffect } from "react";
import { SuggestionListProps } from "./types";

export const SuggestionList: FC<SuggestionListProps> = ({
	suggestions,
	setSuggestions,
	onSearch,
}) => {
	useEffect(() => {
		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.key === "Escape") {
				setSuggestions([]);
			}
		};

		window.addEventListener("keydown", handleKeyDown);
		return () => {
			window.removeEventListener("keydown", handleKeyDown);
		};
	}, []);

	return (
		<>
			{suggestions.length > 0 && (
				<ul className="absolute mt-1 w-full bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden">
					{suggestions.map((item) => (
						<li
							key={item.id}
							className="cursor-pointer px-4 py-2 hover:bg-gray-100 transition-colors"
							onClick={() => {
								onSearch();
								setSuggestions([]);
							}}
						>
							{item.name}
						</li>
					))}
				</ul>
			)}
		</>
	);
};
