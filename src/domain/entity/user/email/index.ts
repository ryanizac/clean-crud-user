import { EmailError } from "./EmailError";

export class Email {
  private static readonly tester =
    /^[-!#$%&'*+/0-9=?A-Z^_a-z`{|}~](\.?[-!#$%&'*+/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;

  private constructor(private email: string) {}

  get value() {
    return this.email;
  }

  static Create(emailArg: string): Email {
    const email = this.EmailOrError(emailArg);
    return new Email(email);
  }

  private static EmailOrError(emailArg: string): string {
    if (typeof emailArg !== "string") {
      throw EmailError.Create("invalidType");
    }

    const email = emailArg.replace(/ /g, "");

    if (!this.tester.test(email)) {
      throw EmailError.Create("invalidFormat");
    }

    return email;
  }
}
