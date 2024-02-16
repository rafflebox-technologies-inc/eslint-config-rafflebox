# Rafflebox ESLint

## Installation

`yarn add --dev eslint-config-rafflebox`

Add .eslintrc to project root

```json
{
  "extends": "@rafflebox-technologies-inc/eslint-config-rafflebox/config-backend"
}
```

Add .prettierrc to project root

```json
{
  "printWidth": 120,
  "singleQuote": true
}
```

Add .editorconfig to project root

```ini
# http://editorconfig.org
root = true

[*]
charset = utf-8
end_of_line = lf
indent_size = 2
indent_style = space
insert_final_newline = true
max_line_length = 120

[*.md]
max_line_length = 0
trim_trailing_whitespace = false

[COMMIT_EDITMSG]
max_line_length = 0
```

Add scripts for linting and formatting to package.json

```json
"scripts": {
  "lint": "eslint .",
  "format": "prettier --write \"**/*.{ts,js,json,md}\"",
  "format:check": "prettier --debug-check \"**/*.{ts,js,json,md}\""
}
```

## Publishing

A new version will be automatically published after merge to master
