import { findFirstErrorMessage } from "@/utils/findFirstErrorMessage";

// Returns null when errors object is empty
it("should return null when errors object is empty", () => {
  const errors = {};
  const result = findFirstErrorMessage(errors);
  expect(result).toBeNull();
});
