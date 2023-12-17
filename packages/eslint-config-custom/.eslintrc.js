module.exports = {
	env: {
		browser: true,
		commonjs: true,
		es2021: true,
	},
	extends: ["airbnb-base", "plugin:prettier/recommended"],
	parserOptions: {
		ecmaVersion: "latest",
	},
	rules: {},
};

// 如果 同一个目录下有多个配置，ESLint 只会使用一个。优先级顺序如下：

// .eslintrc.js
// .eslintrc.yaml
// .eslintrc.yml
// .eslintrc.json
// .eslintrc
// package.json
