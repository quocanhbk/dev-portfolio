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
  {
    name: "Cocktail Sort",
    value: "cocktail",
    description:
      "A variation of Bubble Sort that sorts in both directions, reducing the number of iterations needed by moving both smallest and largest elements in each pass.",
  },
  {
    name: "Radix Sort",
    value: "radix",
    description:
      "A non-comparative sorting algorithm that sorts numbers digit by digit, from least significant to most significant digit.",
  },
  {
    name: "Pancake Sort",
    value: "pancake",
    description:
      "A sorting algorithm that only uses flip operations - like flipping pancakes with a spatula - to sort the array.",
  },
] as const
