import calculator from "../scripts/calculator";

test("calculator operations", () => {
    expect(calculator.add(2,3)).toBe(5);
    expect(calculator.subtract(7,2)).toBe(5);
    expect(calculator.divide(25,5)).toBe(5);
    expect(calculator.multiply(1,5)).toBe(5);
})