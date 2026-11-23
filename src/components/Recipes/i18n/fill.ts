/**
 * Fill in placeholders such as `{count}`.
 *
 * This is apart from `index.ts`, so that the browser scripts do not bundle
 * every language's messages.
 *
 * @param template the message with placeholders
 * @param values the value of each placeholder
 * @returns the message with the values filled in
 */
export function fill(
  template: string,
  values: Record<string, string | number>,
) {
  return template.replace(/\{(\w+)\}/g, (placeholder, key: string) => {
    if (!(key in values)) {
      throw new Error(
        `"${template}" has a placeholder ${placeholder} without a value`,
      );
    }

    return String(values[key]);
  });
}
