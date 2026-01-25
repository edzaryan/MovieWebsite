import * as Yup from 'yup';

export const firstLetterUppercase = (value?: string | null): boolean => {
  if (!value) return true;

  const trimmed = value.trim();
  if (!trimmed) return true;

  const firstChar = trimmed[0];
  return firstChar === firstChar.toUpperCase();
}

Yup.addMethod(Yup.string, 'firstLetterUppercase', function (message) {
  return this.test('first-letter-uppercase', message, function (value) {
    const { path, createError } = this;

    if (!value) return true;

    if (firstLetterUppercase(value)) {
      return true;
    }

    return createError({
      path,
      message: message || 'The first letter must be uppercase'
    });
  });
});
