import { Id } from "./Id";
import { Name } from "./Name";
import { Email } from "./Email";
import { Password } from "./Password";

interface UserConstructor {
  id: Id;
  name: Name;
  email: Email;
  passowrd: Password;
}

interface UserInput {
  id?: string;
  name: string;
  email: string;
  passowrd: string;
}

export class User implements UserConstructor {
  id: Id;
  name: Name;
  email: Email;
  passowrd: Password;

  private constructor(userConstructor: UserConstructor) {
    this.id = userConstructor.id;
    this.name = userConstructor.name;
    this.email = userConstructor.email;
    this.passowrd = userConstructor.passowrd;
  }

  static Create(userInput: UserInput): User {
    const id = Id.Create(userInput.id);
    const name = Name.Create(userInput.name);
    const email = Email.Create(userInput.email);
    const passowrd = Password.Create(userInput.passowrd);

    const user = new User({ id, name, email, passowrd });
    return user;
  }
}
