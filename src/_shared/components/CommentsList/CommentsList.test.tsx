import { render, screen } from "@testing-library/react";
import { it } from "node:test";
import { CommentsList } from "./CommentsList";
import { CommentsListProps } from "./types";

jest.mock("../NoResults", () => ({
	NoResults: () => <div data-testid="no-results">No results found</div>,
}));

test("CommentsList Component", () => {
	it("renders NoResults when comments list is empty", () => {
		render(<CommentsList comments={[]} />);
		expect(screen.getByTestId("no-results")).toBeInTheDocument();
	});

	it("renders the correct number of comments", () => {
		const mockComments: CommentsListProps["comments"] = [
			{
				id: 1,
				name: "Alice",
				email: "alice@example.com",
				body: "Hello World!",
			},
			{
				id: 2,
				name: "Bob",
				email: "bob@example.com",
				body: "Nice to meet you!",
			},
		];

		render(<CommentsList comments={mockComments} />);

		const commentItems = screen.getAllByRole("listitem");
		expect(commentItems).toHaveLength(mockComments.length);
	});

	it("displays comment details correctly", () => {
		const mockComment = {
			id: 1,
			name: "Charlie",
			email: "charlie@example.com",
			body: "This is a comment.",
		};
		render(<CommentsList comments={[mockComment]} />);

		expect(screen.getByText(mockComment.name)).toBeInTheDocument();
		expect(screen.getByText(mockComment.email)).toBeInTheDocument();
		expect(screen.getByText(mockComment.body)).toBeInTheDocument();
	});
});
