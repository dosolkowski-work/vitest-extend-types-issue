import "@testing-library/jest-dom/vitest"; // This adds jest-dom assertions such as .toBeVisible()

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