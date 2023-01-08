import { User } from "./";
import { Id } from "./Id";

describe("User domain entity", () => {
  test("Should create an user", () => {
    const user = User.Create({
      name: "Ryan",
      email: "ryan@gmail.com",
      passowrd: "qwerty1@",
    });
    expect(user.name.value).toBe("Ryan");
    expect(user.id.value).not.toBeUndefined();
  });

  test("Should instance an user", () => {
    const id = Id.Create();
    const user = User.Create({
      id: id.value,
      name: "Ryan",
      email: "ryan@gmail.com",
      passowrd: "qwerty1@",
    });
    expect(user.id.value).toBe(id.value);
  });
});
