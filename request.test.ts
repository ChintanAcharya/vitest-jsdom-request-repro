import { expect, test } from "vitest";

test("does not crash when using fetch with AbortSignal", async () => {
  const response = await fetch("https://example.com", {
    signal: new AbortController().signal,
  });
  expect(response).toBeInstanceOf(Response);
});

test("does not crash when creating a Request with AbortSignal", () => {
  const request = new Request("https://example.com", {
    signal: new AbortController().signal,
  });
  expect(request).toBeInstanceOf(Request);
});
