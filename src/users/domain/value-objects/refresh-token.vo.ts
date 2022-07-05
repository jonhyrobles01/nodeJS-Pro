import uuid from "uuid";

export class RefreshTokenVo {
  #value: string;

  private constructor(token: string) {
    this.#value = token;
  }

  static create(token: string) {
    if (uuid.validate(token)) {
      throw new Error("Invalid refresh token");
    }

    return new RefreshTokenVo(token);
  }

  get Value(): string {
    return this.#value;
  }
}
