import * as bcrypt from "bcrypt";
import { PasswordError } from "./PasswordError";

export class Password {
  private static readonly minLenght = 8;
  private static readonly requiredCharacterTypes: RegExp[] = [
    /[A-Za-z]/, // letters
    /[\d]/, // numbers
    /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/, // special
  ];

  private constructor(private password: string) {}

  get value() {
    return this.password;
  }

  static Create(password: string) {
    this.validate(password);
    const encriptedPassword = this.makeEncriptedPassword(password);
    return new Password(encriptedPassword);
  }

  private static validate(password: string) {
    if (typeof password !== "string") {
      throw PasswordError.Create("invalidType");
    }

    const isSmallerLenght = password.length < Password.minLenght;
    if (isSmallerLenght) {
      throw PasswordError.Create("invalidLength");
    }

    const hasRequiredCharacters = this.checkHasRequiredCharacters(password);
    if (!hasRequiredCharacters) {
      throw PasswordError.Create("invalidContent");
    }
  }

  private static checkHasRequiredCharacters(password: string): boolean {
    const requiredCharacterTypes = this.requiredCharacterTypes;
    const foundSomeFailedTest = requiredCharacterTypes.find((regex) => {
      const testedRegex = regex.test(password);
      return testedRegex === false;
    });
    return !foundSomeFailedTest;
  }

  private static makeEncriptedPassword(password: string): string {
    const saltedPassword = bcrypt.genSaltSync(10);
    const encriptedPassword = bcrypt.hashSync(password, saltedPassword);
    return encriptedPassword;
  }
}
