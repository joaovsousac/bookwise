export const getMostFrequentString = (arr: string[]) => {
  //@ts-ignore
  const hashmap = arr.reduce((acc, val) => {
    //@ts-ignore
    acc[val] = (acc[val] || 0) + 1;
    //@ts-ignore
    return acc;
    //@ts-ignore
  }, {} as Record<string, number>);
  //@ts-ignore
  return Object.keys(hashmap).reduce((a, b) =>
    //@ts-ignore
    hashmap[a] > hashmap[b] ? a : b
  );
};
