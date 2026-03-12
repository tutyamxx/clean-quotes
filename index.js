/**
 *  clean-quotes - ✍️ Normalize quotes, dashes, and ellipsis in strings.
 *  @version: v1.0.1
 *  @link: https://github.com/tutyamxx/clean-quotes
 *  @license: MIT
 **/


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
const cleanQuotes = (str) => (str ?? '')
    ?.replace(/[\u201C\u201D\u00AB\u00BB\u201E\u201F\u2033\u301D\u301E\u301F]/g, '"')       // --| Normalize double quotes
    ?.replace(/[\u2018\u2019\u201A\u201B\u2032\u2035\u02BC\u02BB\u02BD\uFF07]/g, "'")       // --| Normalize single quotes/apostrophes
    ?.replace(/[\u2026\u22EF\u22F1\uFE45]/g, '...')                                         // --| Normalize dashes/hyphens
    ?.replace(/[\u2013\u2014\u2212\u2015]/g, '-')                                           // --| Normalize ellipsis
    ?.replace(/\s+/g, ' ')                                                                  // --| Collapse multiple spaces into one and trim
    ?.trim();

// --| CommonJS export
module.exports = cleanQuotes;

// --| ESM default export for `import` statements
module.exports.default = cleanQuotes;
