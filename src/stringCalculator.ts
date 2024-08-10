interface StringCalculator {
  add(numbers: string): number;
}

class Calculator implements StringCalculator {
  add(numbers: string): number {
    if (numbers.startsWith("//")) {
      const index = numbers.indexOf("\n");
      const delimiter = numbers.substring(2, index);
      numbers = numbers.substring(index + 1);
      return this.addWithDelimiter(numbers, delimiter);
    } else {
      return this.addWithDelimiter(numbers, ",");
    }
  }

  private addWithDelimiter(numbers: string, delimiter: string): number {
    const numArray = numbers.split(delimiter).map(Number);
    const negatives = numArray.filter((num) => num < 0);
    if (negatives.length > 0) {
      throw new Error(`Negative numbers not allowed ${negatives.join(",")}`);
    }
    return numArray.reduce((acc, current) => acc + current, 0);
  }
}

export {Calculator};