import { v4 as uuidV4 } from "uuid";

export class Trace {
  private static instance: Trace;
  private id: string = "";

  private constructor() {}

  static get traceId(): string {
    if (!Trace.instance) {
      Trace.instance = new Trace();
      Trace.instance.id = uuidV4();
    }

    return Trace.instance.id;
  }
}
