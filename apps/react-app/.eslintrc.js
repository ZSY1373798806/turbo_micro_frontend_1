module.exports = {
	extends: ["react-app", "react-app/jest", "@repo/eslint-config-custom"],
  parserOptions: {
    parser: "@typescript-eslint/parser"
  },
	rules: {
		"@typescript-eslint/no-unused-vars": "error",
		"@typescript-eslint/no-explicit-any": "error",
	},
};
