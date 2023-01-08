import { Email } from "./";

describe("Test email field", () => {
  test("Should instantiate an email", () => {
    expect(() => Email.Create("ryan@gmail.com")).not.toThrow();
  });

  test("Should not accept type different of string", () => {
    const expectedMessage = "invalid type of email";
    const e1 = () => Email.Create(2 as any);
    const e2 = () => Email.Create(true as any);
    const e3 = () => Email.Create({} as any);
    expect(e1).toThrow(expectedMessage);
    expect(e2).toThrow(expectedMessage);
    expect(e3).toThrow(expectedMessage);
  });

  test("should throw an error when the email format is invalid", () => {
    const expectedMessage = "invalid format of email";
    const e1 = () => Email.Create("");
    const e2 = () => Email.Create("ryangmail.com");
    const e3 = () => Email.Create("ryan@gmailcom");
    const e4 = () => Email.Create("ryangmailcom");
    expect(e1).toThrow(expectedMessage);
    expect(e2).toThrow(expectedMessage);
    expect(e3).toThrow(expectedMessage);
    expect(e4).toThrow(expectedMessage);
  });
});
