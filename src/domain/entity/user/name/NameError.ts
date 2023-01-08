const mappedErros = {
  invalidType: "invalid type of Name",
  invalidContent: "the name must contain only letters, spaces and apostrophes",
  invalidMaxNumberOfWords: "invalid max number of words in Name",
  someWordWithMinimumLength: "some word has minimum length in Name",
  wordExceedingMaximumLength: "some word exceededs the maximum length in Name",
};

type MappedErrosKeys = keyof typeof mappedErros;

export class NameError extends Error {
  readonly name = "NameError";

  private constructor(message: string) {
    super(message);
    Object.freeze(this);
  }

  static Create(name: MappedErrosKeys) {
    const errorData = mappedErros[name];
    return new NameError(errorData);
  }
}
