import { describe, test, expect, beforeAll, afterAll, afterEach } from 'vitest'
import { renderHook, act } from "@testing-library/react";
import { rest } from "msw";
import { setupServer } from "msw/node";

import { useAPI } from "./useAPI";

const server = setupServer(
  rest.get("/api", (req, res, ctx) => {
    return res(ctx.json({ name: "Jack" }));
  })
);

describe('useApi', () => {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  test("should retrieve correct data", async () => {
    const { result } = renderHook(() => useAPI());

    await act(() => {});

    expect(result.current).toEqual({ name: "Jack" });
  });
})
