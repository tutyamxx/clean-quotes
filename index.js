const doubleQuotes = /[\u201C\u201D\u00AB\u00BB\u201E\u201F\u2033\u301D\u301E\u301F]/g;
const singleQuotes = /[\u2018\u2019\u201A\u201B\u2032\u2035\u02BC\u02BB\u02BD\uFF07\u0060]/g;
const strEllipsis = /[\u2026\u22EF\u22F1\uFE45]/g;
const dashesHyphens = /[\u2013\u2014\u2212\u2015]/g;
const collapseSpaces = /[\s\u00A0\u202F]+/g;

/**
 *  clean-quotes - ✍️ Normalize quotes, dashes, and ellipsis in strings.
 *  @version: v1.0.7
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
const cleanQuotes = (str = '') => {
    if (str == null) {
        return '';
    }

    return str?.replace(doubleQuotes, '"')          // --| Normalize double quotes
        ?.replace(singleQuotes, "'")                // --| Normalize single quotes/apostrophes
        ?.replace(strEllipsis, '...')               // --| Normalize ellipsis
        ?.replace(dashesHyphens, '-')               // --| Normalize dashes/hyphens
        ?.replace(collapseSpaces, ' ')              // --| Collapse multiple spaces into one
        ?.trim();
};

// --| CommonJS export
module.exports = cleanQuotes;

// --| ESM default export for `import` statements
module.exports.default = cleanQuotes;
