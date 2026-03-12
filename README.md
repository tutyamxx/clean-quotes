# clean-quotes

<p align="center"><a href="https://nodei.co/npm/clean-quotes/"><img src="https://nodei.co/npm/clean-quotes.png"></a></a></p>
<p align="center">
  <img src="https://img.shields.io/badge/License-MIT-yellow.svg">
</p>

* ✍️ Normalize quotes, dashes, and ellipsis in strings.
* ♻️ Works seamlessly with `CommonJS`, `ESM` and `TypeScript`

# 📦 Install via [NPM](https://www.npmjs.com/package/clean-quotes)

```bash
$ npm i clean-quotes
```

# 💻 Usage

- See examples below

## CommonJS
```javascript
const cleanQuotes = require('clean-quotes');

const input = `“Hello” — said the cat… ‘Are you okay?’ «Bonjour» ― こんにちは…`;
const cleanedString = cleanQuotes(input);

console.log(cleanedString);

// --| Expected output: "Hello" - said the cat... 'Are you okay?' "Bonjour" - こんにちは...
```

## ESM
```javascript
import cleanQuotes from 'clean-quotes';

const input = `“Hello” — said the cat… ‘Are you okay?’ «Bonjour» ― こんにちは…`;

const cleanedString = cleanQuotes(input);
console.log(cleanedString);

// --| Expected output: "Hello" - said the cat... 'Are you okay?' "Bonjour" - こんにちは...
```

## TypeScript
```javascript
import cleanQuotes from 'clean-quotes';

const input: string = `“Hello” — said the cat… ‘Are you okay?’ «Bonjour» ― こんにちは…`;
const cleanedString: string = cleanQuotes(input);

console.log(cleanedString);

// --| Expected output: "Hello" - said the cat... 'Are you okay?' "Bonjour" - こんにちは...
```
