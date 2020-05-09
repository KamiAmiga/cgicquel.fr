module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  // add your custom rules here
  rules: {
    "vue/attributes-order": [1, {
      "order": [
        "DEFINITION",
        "LIST_RENDERING",
        "CONDITIONALS",
        "RENDER_MODIFIERS",
        "GLOBAL",
        "UNIQUE",
        "TWO_WAY_BINDING",
        "OTHER_DIRECTIVES",
        "OTHER_ATTR",
        "EVENTS",
        "CONTENT"
      ],
    }],
    "vue/html-closing-bracket-newline": [1, {
      "multiline": "never"
    }],
    "vue/html-indent": [1, 2, {
      "alignAttributesVertically": false
    }],
    "vue/max-attributes-per-line": "off"   
  }
}
