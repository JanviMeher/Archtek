export function cn(...classes: (string | false | null | undefined)[]): string {
  return classes.filter(Boolean).join(" ");
}

export function getYearsInPractice(founded: number): number {
  return new Date().getFullYear() - founded;
}
