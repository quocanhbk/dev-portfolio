export const SORT_ALGORITHMS = [
  {
    name: "Bubble Sort",
    value: "bubble",
    description:
      "A simple sorting algorithm that works by repeatedly swapping the adjacent elements if they are in the wrong order.",
  },
  {
    name: "Quick Sort",
    value: "quick",
    description:
      "A sorting algorithm that works by selecting a pivot element and partitioning the array around the pivot.",
  },
  {
    name: "Merge Sort",
    value: "merge",
    description:
      "A sorting algorithm that works by dividing the array into two halves, sorting each half, and then merging the two halves.",
  },
  {
    name: "Insertion Sort",
    value: "insertion",
    description:
      "A sorting algorithm that works by inserting the current element into the correct position in the sorted array.",
  },
  {
    name: "Shell Sort",
    value: "shell",
    description:
      "An optimization of insertion sort that allows the exchange of items that are far apart, reducing the number of swaps required.",
  },
] as const
