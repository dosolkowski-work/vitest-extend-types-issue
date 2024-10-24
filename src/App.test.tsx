import { App } from "App";
import { render, screen } from "@testing-library/react";

function renderComponent() {
    render(<App />);
}

describe("The application", () => {
    it("renders some text", async () => {
        renderComponent();

        expect(await screen.findByText(/just a test/i)).toBeVisible();
    });
});