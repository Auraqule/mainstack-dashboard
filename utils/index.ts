export const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", { day: "numeric", month: "short" });
};

export function sumKeys(obj: any) {
  let sum = 0;
  for (const key in obj) {
    sum += obj[key];
  }
  return sum;
}
