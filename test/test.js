import { expect } from 'chai';
import StringCalculator from '../StringCalculator.js';



describe('StringCalculator', () => {
    it('should return 0 for an empty string', () => {
        expect(StringCalculator.add("")).to.equal(0);
    });


});