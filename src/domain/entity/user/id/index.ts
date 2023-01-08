import { v4 as uuid } from "uuid";
import { IdError } from "./IdError";

export class Id {
  private static readonly len = 36;

  private constructor(private id: string) {}

  get value() {
    return this.id;
  }

  static Create(idArg?: string): Id {
    const id = this.IdOrError(idArg);
    return new Id(id);
  }

  private static IdOrError(idArg?: string): string {
    if (idArg === undefined) {
      return this.generate();
    }

    if (typeof idArg !== "string") {
      throw IdError.Create("invalidType");
    }

    if (idArg.length !== this.len) {
      throw IdError.Create("invalidLength");
    }

    return idArg;
  }

  private static generate() {
    return uuid();
  }
}
