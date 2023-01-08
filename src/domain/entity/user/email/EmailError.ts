const mappedErros = {
  invalidType: "invalid type of email",
  invalidFormat: "invalid format of email",
};

type MappedErrosKeys = keyof typeof mappedErros;

export class EmailError extends Error {
  readonly name = "EmailError";

  private constructor(message: string) {
    super(message);
    Object.freeze(this);
  }

  static Create(name: MappedErrosKeys) {
    const errorData = mappedErros[name];
    return new EmailError(errorData);
  }
}
