

class StringCalculator {

    /**
     * Method to handle simple String calculator with a method signature
     * @param {1,2,3} numbers 
     * @returns 
     */
    static add(numbers) {
        if (!numbers) return 0;

        let delimiter = /,|\n/;
        if (numbers.startsWith("//")) {
            const parts = numbers.split("\n");
            delimiter = new RegExp(parts[0].substring(2));
            numbers = parts[1];
        }

        // Validate for invalid sequences like "1,\n" or ",\n1"
        if (numbers.match(/,\n|\n,/)) {
            throw new Error(`invalid input: ${numbers}`);
        }

        const numberArray = numbers.split(delimiter);

        const parsedNumbers = numberArray.map(Number);
        const negatives = parsedNumbers.filter(num => num < 0);
        if (negatives.length > 0) {
            throw new Error(`negative numbers not allowed: ${negatives.join(", ")}`);
        }

        return parsedNumbers.reduce((sum, num) => sum + num, 0);
    }
}

export default StringCalculator;
