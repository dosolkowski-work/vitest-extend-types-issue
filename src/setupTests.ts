import "@testing-library/jest-dom/vitest"; // This adds jest-dom assertions such as .toBeVisible()
import * as matchers from "vitest-axe/matchers";
import { act } from "@testing-library/react";
import { axe } from "vitest-axe";

export async function accessibilityViolationsCheck(container?: HTMLElement) {
    if (container) {
        let axeResult;
        await act(async () => {
            axeResult = await axe(container);
        });
        expect(axeResult).toHaveNoViolations();
    }
}

// Add vitest-axe toHaveNoViolations() assertion
expect.extend(matchers);

// Another broken piece we need to mock; vitest-canvas-mock doesn't do the trick.
HTMLCanvasElement.prototype.getContext = () => null;

expect.extend({
    toBeFrob(actual) {
        if (typeof actual !== "string") {
            throw new Error("Actual value must be a string");
        }

        const { utils, isNot } = this;

        let pass = actual === "frob";
        if (isNot) {
            pass = !pass;
        }

        return {
            pass,
            message: () => `expected ${utils.printReceived(actual)} to be ${utils.printExpected("frob")}`
        };
    },
});