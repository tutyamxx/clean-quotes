const cleanQuotes = require('../index.js');

describe('cleanQuotes', () => {
    test('Normalizes all types of double quotes', () => {
        const input = `“Hello” «World» „Test‟ 〝Example〞`;
        const expected = `"Hello" "World" "Test" "Example"`;

        expect(cleanQuotes(input)).toBe(expected);
    });

    test('Normalizes all types of single quotes/apostrophes', () => {
        const input = `‘Hello’ ‚World‛ ʼ’ ʼ’`;
        const expected = `'Hello' 'World' '' ''`;

        expect(cleanQuotes(input)).toBe(expected);
    });

    test('Normalizes all types of dashes/hyphens', () => {
        const input = `– — − ―`;
        const expected = `- - - -`;

        expect(cleanQuotes(input)).toBe(expected);
    });

    test('Normalizes ellipsis variants', () => {
        const input = `… … ﹅ …`;
        const expected = `... ... ... ...`;

        expect(cleanQuotes(input)).toBe(expected);
    });

    test('Collapses multiple spaces and trims', () => {
        const input = `   Hello     world   `;
        const expected = `Hello world`;

        expect(cleanQuotes(input)).toBe(expected);
    });

    test('Handles null and undefined', () => {
        expect(cleanQuotes(null)).toBe('');
        expect(cleanQuotes(undefined)).toBe('');
    });

    test('Works with multi-language text', () => {
        const input = `“Hello” — said the cat… ‘Are you okay?’ «Bonjour» ― こんにちは…`;
        const expected = `"Hello" - said the cat... 'Are you okay?' "Bonjour" - こんにちは...`;

        expect(cleanQuotes(input)).toBe(expected);
    });

    test('Preserves emoji and special characters', () => {
        const input = `“Hello 😺” — こんにちは…`;
        const expected = `"Hello 😺" - こんにちは...`;

        expect(cleanQuotes(input)).toBe(expected);
    });

    test('Combines all features in one complex string', () => {
        const input = `‘Test’ – “Example”… ― «多言語»…  ✅`;
        const expected = `'Test' - "Example"... - "多言語"... ✅`;

        expect(cleanQuotes(input)).toBe(expected);
    });
});
