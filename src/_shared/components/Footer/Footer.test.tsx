import { render, screen } from "@testing-library/react";
import { Footer } from "./Footer";

test("renders the footer with copyright text", () => {
	render(<Footer />);

	expect(
		screen.getByText(/© 2025 Typely by Edoardo Balloi. All rights reserved./i)
	).toBeInTheDocument();
});
