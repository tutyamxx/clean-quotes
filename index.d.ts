/**
 * Normalize a string by standardizing quotes, dashes, ellipsis, and whitespace.
 *
 * - Converts all double quotes variants to standard `"`
 * - Converts all single quotes/apostrophes variants to `'`
 * - Converts all dash/hyphen variants to `-`
 * - Converts all ellipsis variants to `...`
 * - Collapses multiple spaces into a single space and trims the string
 *
 * Supports multi-language punctuation.
 *
 * @param {string | null | undefined} str - The input string to normalize
 * @returns {string} The normalized string
 */
declare function cleanQuotes(str: string | null | undefined): string;

export = cleanQuotes;
