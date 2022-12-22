module.exports = {
	content: ['./src/**/*.{js,jsx}', './public/index.html'],
	theme: {
		extend: {
			colors: {
				calc: {
					textGray: '#DFE3FA',
					mainBg: '#3a4764',
					folderBg: '#232c43',
					screenBg: '#182034',
					tableBg: '#007a8a',
					incomeBg: '#3d91f9',
				},
				action: {
					orange: '#d03f2f',
					orangeLight: '#d55244',
					turquoise: '#007a8a',
					turquoiseLight: '1a8796',
					blue: '#404e72',
					blueLight: '#536080',
				},
			},
		},
	},
	plugins: [],
};
