import "vitest";
import type { AxeMatchers } from "vitest-axe";

interface CustomMatchers {
    toBeFrob: () => void;
}

declare module "vitest" {
    interface Assertion<T = any> extends CustomMatchers, AxeMatchers {}
    interface AsymmetricMatchersContaining extends CustomMatchers, AxeMatchers {}
}