import { v4 as uuid } from "uuid";
import { Id } from "./index";

describe("Test Id field", () => {
  test("Should generate an id", () => {
    expect(() => Id.Create()).not.toThrow("");
  });

  test("Should instantiate an id", () => {
    const randomId = uuid();
    const id = Id.Create(randomId);
    expect(id.value).toBe(randomId);
  });

  test("Should not accept type different of string", () => {
    expect(() => Id.Create(23 as any)).toThrow("Invalid type of Id");
    expect(() => Id.Create(true as any)).toThrow("Invalid type of Id");
    expect(() => Id.Create({} as any)).toThrow("Invalid type of Id");
  });

  test("Should not instantiate with invalid lenght", () => {
    expect(() => Id.Create("abc32")).toThrow("Invalid length of Id");
  });
});
