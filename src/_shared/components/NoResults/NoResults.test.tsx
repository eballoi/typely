import { render, screen } from "@testing-library/react";
import { NoResults } from "./NoResults";

test("renders the no results message", () => {
	render(<NoResults />);
	expect(screen.getByText("No results found")).toBeInTheDocument();
});
