import { render, screen, fireEvent } from "@testing-library/react";
import { SearchButton } from "./SearchButton";

jest.mock("lucide-react", () => ({
	Send: () => <svg data-testid="mock-icon" />,
}));

describe("SearchButton", () => {
	test("renders the button with an icon", () => {
		render(<SearchButton />);
		expect(screen.getByRole("button")).toBeInTheDocument();
	});

	test("calls onClick when clicked", () => {
		const handleClick = jest.fn();
		render(<SearchButton onClick={handleClick} />);

		const button = screen.getByRole("button");
		fireEvent.click(button);

		expect(handleClick).toHaveBeenCalledTimes(1);
	});
});
