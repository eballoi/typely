import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { SuggestionList } from "./SuggestionList";
import { Comment } from "@/_shared/types/core";

test("renders suggestions and handles click", async () => {
	const mockSuggestions: Comment[] = [
		{ id: 1, name: "John Doe", email: "john@example.com", body: "Hello" },
		{ id: 2, name: "Jane Doe", email: "jane@example.com", body: "Hi" },
	];

	const setSuggestions = jest.fn();
	const onSearch = jest.fn();
	const setQuery = jest.fn(); // ✅ Include this missing prop

	render(
		<SuggestionList
			suggestions={mockSuggestions}
			setSuggestions={setSuggestions}
			onSearch={onSearch}
			setQuery={setQuery} // ✅ Now it matches the expected props
		/>
	);

	expect(screen.getByText("John Doe")).toBeInTheDocument();
	expect(screen.getByText("Jane Doe")).toBeInTheDocument();

	await userEvent.click(screen.getByText("John Doe"));
	expect(onSearch).toHaveBeenCalled();
	expect(setSuggestions).toHaveBeenCalledWith([]);
});
