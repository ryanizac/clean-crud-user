const mappedErros = {
  invalidType: "Invalid type of Id",
  invalidLength: "Invalid length of Id",
};

type MappedErrosKeys = keyof typeof mappedErros;

export class IdError extends Error {
  readonly name = "IdError";

  private constructor(message: string) {
    super(message);
    Object.freeze(this);
  }

  static Create(name: MappedErrosKeys) {
    const errorData = mappedErros[name];
    return new IdError(errorData);
  }
}
