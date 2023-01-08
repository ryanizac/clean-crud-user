const mappedErros = {
  invalidType: "invalid type of password",
  invalidLength: "invalid length of password",
  invalidContent:
    "the password must contain letters, numbers and special characters",
};

type MappedErrosKeys = keyof typeof mappedErros;

export class PasswordError extends Error {
  name = "PasswordError";

  private constructor(message: string) {
    super(message);
    this.message = message;
    this.name = "PasswordError";
  }

  static Create(name: MappedErrosKeys) {
    const errorData = mappedErros[name];
    return new PasswordError(errorData);
  }
}
