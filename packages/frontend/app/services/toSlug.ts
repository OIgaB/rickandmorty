type ToSlugType = (value: string) => string;

export const toSlug: ToSlugType = (value) =>
  value.toLowerCase().trim().replace(/\s+/g, "-");
