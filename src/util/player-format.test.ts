import { describe, expect, test } from "vitest";
import { formatDraftInfo, inchesToFeetAndInches } from "./player-format";

describe("player-format", () => {
  test("properly add ordinals to draft details", () => {
    expect(formatDraftInfo(1, 2)).toEqual(["1st", "2nd"]);
  });
  test("correctly handles 11 and 12", () => {
    expect(formatDraftInfo(11, 12)).toEqual(["11th", "12th"]);
  });
  test("correctly handles 13", () => {
    expect(formatDraftInfo(13, 13)).toEqual(["13th", "13th"]);
  });
});

describe("inches-to-feet", () => {
  test("it should convert inches to a proper height", () => {
    expect(inchesToFeetAndInches(76)).toEqual({ feet: 6, inches: 4 });
  });
  test("it should convert inches to a proper height", () => {
    expect(inchesToFeetAndInches(60)).toEqual({ feet: 5, inches: 0 });
  });
});
