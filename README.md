# eslint-config-tree-shaking-import-restrictions

An implementation of the ESLint rule `no-restricted-imports` designed to prevent imports of commonly used libraries that break tree shaking. All blocked imports have messages that instruct how to better import them in order to maximize the tree-shakability of the project.

## How to Use

Install the library: `yarn add --dev @craigmiller160/eslint-config-tree-shaking-import-restrictions`. Then, extend it in your `.eslintrc.js` file:

```
module.exports = {
    extends: [
        '@craigmiller160/eslint-config-tree-shaking-import-restrictions'
    ]
};
```

## Prerequisites

ESLint must be installed in the consuming project.
