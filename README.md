# Rafflebox ESLint

## Installation

`yarn add --dev eslint-config-rafflebox`

Add .eslintrc to project root

```json
{
  "extends": "eslint-config-neo/config-backend"
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
  "format": "prettier --write \"**/*.{ts,tsx,js,json,graphql,md}\"",
  "format:check": "prettier --debug-check \"**/*.{ts,tsx,js,json,graphql,md}\""
}
```

## Publishing

1. Update the version in package.json
1. Commit your changes
1. `npm pack --dry-run` to see what will be published
1. `npm publish`
1. Create a release on GitHub. Use the version as the tag and release name. For example for version `1.0.0` the tag and release name would be `v1.0.0`.
