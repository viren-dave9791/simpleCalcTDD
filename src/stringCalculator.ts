interface StringCalculator {
  add(numbers: string): number;
}

class Calculator implements StringCalculator {
  add(numbers: string): number {
    return 1;
  }
}