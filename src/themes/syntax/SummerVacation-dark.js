const neutrals = require('../../colors/dark-neutrals')
const colors = require('../../colors/dark-palette')

tokens = {
	error: colors.red,
	background: neutrals.gray700,
	foreground: neutrals.gray100,
	punctuation: neutrals.gray200,
	string: colors.green,
	numeric: colors.teal,
	units: neutrals.gray200,
	null: colors.teal,
	boolean: colors.teal,
	constant: colors.teal,
	variable: colors.pinkLight,
	property: colors.pinkDark,
	keyword: colors.purple,
	control: colors.purple,
	this: colors.orange,
	class: colors.yellow,
	type: colors.orange,
	function: colors.blueLight,
	comment: colors.blueDark,
	tag: colors.orange,
	attribute: colors.pinkDark,
	component: colors.yellow,
}

module.exports = tokens
