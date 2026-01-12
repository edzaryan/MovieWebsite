
export const firstLetterUppercase = (value?: string | null): boolean => {
  if (!value) return true;

  const trimmed = value.trim();
  if (!trimmed) return true;

  const firstChar = trimmed[0];
  return firstChar === firstChar.toUpperCase();
}