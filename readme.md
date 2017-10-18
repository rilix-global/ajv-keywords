# @rilix/ajv-keywords

[![Build Status](https://travis-ci.org/rilix-global/ajv-keywords.svg?branch=master)](https://travis-ci.org/rilix-global/ajv-keywords)
[![Test Coverage](https://codeclimate.com/github/rilix-global/ajv-keywords/badges/coverage.svg)](https://codeclimate.com/github/rilix-global/ajv-keywords/coverage)
[![Code Climate](https://codeclimate.com/github/rilix-global/ajv-keywords/badges/gpa.svg)](https://codeclimate.com/github/rilix-global/ajv-keywords)
[![Issue Count](https://codeclimate.com/github/rilix-global/ajv-keywords/badges/issue_count.svg)](https://codeclimate.com/github/rilix-global/ajv-keywords)

This lid adds some keywords to ajv, mainly to facilitate our translations.

How to user:

```javascript
import Ajv from 'ajv';
import rilixAjvKeywords from '@rilix/ajv-keywords';

const ajv = new Ajv();
rilixAjvKeywords(ajv);

ajv.validate({ email: true }, 'example@example.com'); // true
ajv.validate({ email: true }, 'example'); // false
```

For more usage examples please refer to the spec folder or open an issue with a question.
