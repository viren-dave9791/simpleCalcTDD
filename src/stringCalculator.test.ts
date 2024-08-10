import { Calculator } from "./stringCalculator";

describe("StringCalculator", () => {
  const calculator = new Calculator();

  it("should return 0 for an empty string", () => {
    expect(calculator.add("")).toBe(0);
  });

  it("should return the number for a single number string", () => {
    expect(calculator.add("1")).toBe(1);
  });

  it("should return the sum of multiple numbers separated by commas", () => {
    expect(calculator.add("1,2,3")).toBe(6);
  });

  it("should return the sum of multiple numbers separated by new lines", () => {
    expect(calculator.add("1\n2,3")).toBe(6);
  });

  it("should support different delimiters", () => {
    expect(calculator.add("//;\n1;2")).toBe(3);
  });

  it("should throw an error for a negative number", () => {
    expect(() => calculator.add("-1,2")).toThrowError("negative numbers not allowed -1");
  });

  it("should throw an error for multiple negative numbers", () => {
    expect(() => calculator.add("-1,-2,3")).toThrowError("negative numbers not allowed -1,-2");
  });
});