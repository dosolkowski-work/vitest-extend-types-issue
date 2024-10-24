import { App } from "App";
import { accessibilityViolationsCheck } from "testUtils";
import { render, screen } from "@testing-library/react";

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