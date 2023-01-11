import { Result } from "@shared/aplication/interfaces";

export function ResponseDto<T>(
  traceId: string,
  data: T | T[],
  total?: number
): Result<T> {
  if (total || total === 0) {
    return { traceId, payload: { data, total } };
  }

  return { traceId, payload: { data } };
}
