type Falsy = boolean | undefined | null | 0;

function classNames(...classes: (string | Falsy)[]) {
  return classes.filter(Boolean).join(' ') || undefined;
}

export default classNames;
