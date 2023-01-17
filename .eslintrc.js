module.exports = {
	root: true,
	env: {
		browser: true,
		es2021: true,
	},
	extends: ['plugin:react/recommended', 'eslint:recommended', 'prettier'],
	parser: '@babel/eslint-parser',
	parserOptions: {
		requireConfigFile: false,
		babelOptions: {
			presets: ['@babel/preset-react'],
		},
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	rules: {
		'react/prop-types': 'off',
	},
};
console.log('🚀 ~ file: .eslintrc.js:24 ~ root', root);
