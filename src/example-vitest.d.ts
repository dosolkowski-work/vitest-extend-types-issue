import "vitest";

interface CustomMatchers {
    toBeFrob: () => void;
}

declare module "vitest" {
    interface Assertion<T = any> extends CustomMatchers {}
    interface AsymmetricMatchersContaining extends CustomMatchers {}
}