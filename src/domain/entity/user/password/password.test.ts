import { Password } from "./";

describe("Test passowrd field", () => {
  test("Should instantiate a valid password", () => {
    expect(() => {
      Password.Create("1234@abc");
    }).not.toThrow();
  });

  test("Should not accept type different of string", () => {
    expect(() => {
      Password.Create(2 as any);
      Password.Create(true as any);
      Password.Create({} as any);
    }).toThrow("invalid type of password");
  });

  test("Should throw error if password does not contain minimum length", () => {
    expect(() => {
      Password.Create("ryan");
    }).toThrow("invalid length of password");
  });

  test("Should throw error if password does not contain the requireds characters", () => {
    const expectedMessage =
      "must contain letters, numbers and special characters";

    const onlyLetters = () => Password.Create("ryanryan");
    const onlyNumbers = () => Password.Create("12345678");
    const onlySpecial = () => Password.Create("!@#$%^&*_");
    const lettersAndNumbers = () => Password.Create("ryan1234");
    const lettersAndSpecial = () => Password.Create("ryanrya1");
    const specialAndNumbers = () => Password.Create("!@123456");

    expect(onlyLetters).toThrow(expectedMessage);
    expect(onlyNumbers).toThrow(expectedMessage);
    expect(onlySpecial).toThrow(expectedMessage);
    expect(lettersAndNumbers).toThrow(expectedMessage);
    expect(lettersAndSpecial).toThrow(expectedMessage);
    expect(specialAndNumbers).toThrow(expectedMessage);
  });
});
