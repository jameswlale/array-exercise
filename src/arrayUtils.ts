/**
 * Divides the given array into smaller groups of a maximum size of `groupSize`.
 * Remainders will also be included.
 * @param arr The array to be grouped. Must have length
 * @param groupSize The size of the groups the array will be divided into. Must be greater than 0
 */
export function groupArrayElements<T>(arr: T[], groupSize: number): T[][] {
  if (!arr.length || groupSize < 0) {
    return [];
  }

  const chunkSize = Math.ceil(arr.length / groupSize);
  return [
    ...Array(groupSize > arr.length ? arr.length : groupSize),
  ].map((_, index) =>
    arr.slice(chunkSize * index, chunkSize * index + chunkSize)
  );
}
