import { Certificate } from "crypto";
import caesarCipher from "../scripts/caesarCipher"

test("caesarCipher", () => {
    expect(caesarCipher('zilla',1)).toBe('ajmmb');
    expect(caesarCipher('Zilla',2)).toBe('bknnc')
    expect(caesarCipher('Ja345,,,|||///mEs',3)).toBe('mdphv')
})