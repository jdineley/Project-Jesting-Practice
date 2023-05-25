import capitalize from "../scripts/capitalize"

test("capitalizes first character", () => {
    expect(capitalize('james')).toBe('James')
})