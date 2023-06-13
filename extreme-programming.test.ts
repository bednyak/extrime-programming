import {describe, expect, test} from '@jest/globals';
import ExtremeProgramming from './extreme-programming';

describe('sum module', () => {
    test('adds 1 + 2 to equal 3', () => {
        const extrProg = new ExtremeProgramming()
        expect(extrProg.testMultiplication(1, 2)).toBe(3);
    });
});