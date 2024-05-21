import { expect } from 'chai';
import StringCalculator from '../StringCalculator.js';

describe('StringCalculator', () => {

    it('should return 0 for an empty string', () => {
        expect(StringCalculator.add("")).to.equal(0);
    });

    it('should return the number itself for a single number', () => {
        expect(StringCalculator.add("1")).to.equal(1);
    });

    it('should return the sum of two numbers', () => {
        expect(StringCalculator.add("1,2")).to.equal(3);
    });

    it('should return the sum of multiple numbers', () => {
        expect(StringCalculator.add("1,2,3,4")).to.equal(10);
    });

    it('should handle new lines between numbers', () => {
        expect(StringCalculator.add("1\n2,3")).to.equal(6);
    });

    it('should handle input is invalid', () => {
        expect(StringCalculator.add("1\n2,3")).to.equal(6);
    });

    it('should handle different delimiters', () => {
        expect(StringCalculator.add("//;\n1;2")).to.equal(3);
    });

});