import { App } from "App";
import { render, screen } from "@testing-library/react";
import { accessibilityViolationsCheck } from "setupTests";

let component: HTMLElement | undefined;

function renderComponent() {
    component = render(<App />).container;
}

describe("The application", () => {
    afterEach(async () => await accessibilityViolationsCheck(component));

    it("renders some text", async () => {
        renderComponent();

        expect(await screen.findByText(/just a test/i)).toBeVisible();
    });
});