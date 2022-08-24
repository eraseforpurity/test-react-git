export const sortColumn = (name, direction, arrayToSort) => {
  if (direction === "asc")
    return [...arrayToSort].sort((a, b) => (a[name] > b[name] ? -1 : 1));
  return [...arrayToSort].sort((a, b) => (a[name] > b[name] ? 1 : -1));
};
