import { Name } from "./index";

describe("Test name field", () => {
  test("Should instantiate n name", () => {
    expect(() => {
      Name.Create("Ryan");
      Name.Create("Bia");
      Name.Create("Bia n n n n n n n");
    }).not.toThrow();
  });

  test("Should not accept type different of string", () => {
    const expectedMessage = "invalid type of Name";
    const n1 = () => Name.Create(2 as any);
    const n2 = () => Name.Create(true as any);
    const n3 = () => Name.Create({} as any);
    expect(n1).toThrow(expectedMessage);
    expect(n2).toThrow(expectedMessage);
    expect(n3).toThrow(expectedMessage);
  });

  test("Should not instantiate with invalid content", () => {
    const expectedMessage = "must contain only letters";
    const n1 = () => Name.Create("ryan @");
    const n2 = () => Name.Create("ryan !");
    const n3 = () => Name.Create("ryan!");
    expect(n1).toThrow(expectedMessage);
    expect(n2).toThrow(expectedMessage);
    expect(n3).toThrow(expectedMessage);
  });

  test("Expect error if count word exceeds the maximum", () => {
    expect(() => {
      Name.Create("rn n n n n n n n n");
    }).toThrow("invalid max number of words in Name");
  });

  test("Should give error if some word not has minimum length", () => {
    expect(() => {
      Name.Create("rn n n n n n n n");
    }).toThrow("some word has minimum length in Name");
  });

  test("Should give error if some word exceeds maximum length", () => {
    expect(() => {
      Name.Create("ryanryanryanryan n n n n n n n");
    }).toThrow("some word exceededs the maximum length in Name");
  });
});
