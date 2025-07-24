import {expect, test} from 'vitest';

test('does not crash when creating a Request with AbortSignal', () => {
  const request = new Request('https://example.com', {signal: new AbortController().signal});
  expect(request).toBeInstanceOf(Request);
});
