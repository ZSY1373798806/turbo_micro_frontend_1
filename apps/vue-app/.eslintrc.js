module.exports = {
	extends: ["plugin:vue/essential", "@repo/eslint-config-custom"],
	parserOptions: {
		parser: "@babel/eslint-parser",
	},
  rules: {
		"vue/multi-word-component-names": "off",
	},
};
