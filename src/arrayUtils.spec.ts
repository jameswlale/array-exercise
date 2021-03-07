import { groupArrayElements } from "./arrayUtils";

describe("arrayUtils", () => {
  it("should return an empty array, when an empty array is provided", () => {
    expect(groupArrayElements([], 1)).toEqual([]);
  });

  it("should return an empty array, when groupSize < 1", () => {
    expect(groupArrayElements([], 0)).toEqual([]);
    expect(groupArrayElements([], -1)).toEqual([]);
  });

  it("should return valid array groups for group sizes equally divisible by the array length", () => {
    expect(groupArrayElements([1, 2, 3, 4, 5, 6], 3)).toEqual([
      [1, 2],
      [3, 4],
      [5, 6],
    ]);
    expect(groupArrayElements([1, 2, 3, 4, 5, 6], 1)).toEqual([
      [1, 2, 3, 4, 5, 6],
    ]);
    expect(groupArrayElements([1, 2, 3], 3)).toEqual([[1], [2], [3]]);

    expect(
      groupArrayElements([{ a: "a" }, { b: "b" }, { c: "c" }], 3)
    ).toEqual([[{ a: "a" }], [{ b: "b" }], [{ c: "c" }]]);
  });

  it("should return valid array groups for group sizes containing remainders", () => {
    expect(groupArrayElements([1, 2, 3, 4, 5], 3)).toEqual([
      [1, 2],
      [3, 4],
      [5],
    ]);
    expect(groupArrayElements([1, 2, 3, 4, 5], 2)).toEqual([
      [1, 2, 3],
      [4, 5],
    ]);
    expect(
      groupArrayElements([{ a: "a" }, { b: "b" }, { c: "c" }], 2)
    ).toEqual([[{ a: "a" }, { b: "b" }], [{ c: "c" }]]);
  });

  it("should return valid array groups when the group size exceeds the array length", () => {
    expect(groupArrayElements([1, 2], 100)).toEqual([[1], [2]]);
  });

  it("should not mutate original array", () => {
    const arr = [1, 2, 3];
    groupArrayElements(arr, 3);
    expect(arr).toEqual([1, 2, 3]);
  });
});
