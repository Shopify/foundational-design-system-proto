export type ClassValue = string | number | null | boolean | undefined;

function classNames(...classes: ClassValue[]): string {
  return classes.filter(Boolean).join(' ') || '';
}

export default classNames;
