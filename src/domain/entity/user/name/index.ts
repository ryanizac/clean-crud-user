import { NameError } from "./NameError";

const capitalize = (text: string) => {
  return text[0].toUpperCase() + text.slice(1).toLocaleLowerCase();
};

export class Name {
  private static readonly maxNumberOfWords = 8;
  private static readonly minLengthForSomeWord = 3;
  private static readonly maxLengthPerWord = 15;
  private static readonly tester = /^[a-zA-Z ']+$/;

  private constructor(private name: string) {}

  get value() {
    return this.name;
  }

  static Create(nameArg: string): Name {
    const name = this.NameOrError(nameArg);
    return new Name(name);
  }

  private static NameOrError(nameArg: string): string {
    if (typeof nameArg !== "string") {
      throw NameError.Create("invalidType");
    }

    const invalidContent = this.tester.test(nameArg);
    if (!invalidContent) {
      throw NameError.Create("invalidContent");
    }

    const name = nameArg.trim().replace(/ {2,}/, " ");
    const words = name.split(" ");

    if (words.length > this.maxNumberOfWords) {
      throw NameError.Create("invalidMaxNumberOfWords");
    }

    if (!this.hasSomeWordWithMinimumLength(words)) {
      throw NameError.Create("someWordWithMinimumLength");
    }

    if (this.hasWordExceedingMaximumLength(words)) {
      throw NameError.Create("wordExceedingMaximumLength");
    }

    const capitalizedWordsName = this.capitalizeWords(words);
    const finalName = capitalizedWordsName.join(" ");

    return finalName;
  }

  private static hasSomeWordWithMinimumLength(words: string[]): boolean {
    const min = this.minLengthForSomeWord;
    return words.findIndex((word) => word.length >= min) > -1;
  }

  private static hasWordExceedingMaximumLength(words: string[]): boolean {
    return words.findIndex((word) => word.length > this.maxLengthPerWord) > -1;
  }

  private static capitalizeWords(words: string[]): string[] {
    return words.map(capitalize);
  }
}
