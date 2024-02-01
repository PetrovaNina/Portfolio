/**
 * Combines CSS class names into `class` attribute string
 */
export default function classNames(...classes: ClassValue[]) {
  return classes
    .filter(Boolean)
    .map((item) => (Array.isArray(item) ? item.join(" ") : item))
    .join(" ");
}

type ClassValue = string | number | boolean | null | undefined;
