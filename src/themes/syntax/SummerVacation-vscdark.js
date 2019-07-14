const grays = require('../../colors/grays')
const colors = require('../../colors/dark-palette')
const { lighten } = require('../../colors/utils')

tokens = {
	background: grays.gray700,
	foreground: grays.gray100,
	punctuation: grays.gray200,
	string: colors.orange,
	numeric: colors.orange,
	units: colors.purple,
	null: colors.orange,
	boolean: colors.orange,
	constant: colors.orange,
	variable: colors.blueLight,
	property: colors.blueLight,
	keyword: colors.blueDark,
	control: colors.purple,
	this: colors.yellow,
	class: colors.teal,
	function: colors.yellow,
	comment: colors.green,
	tag: colors.blueDark,
	attribute: colors.blueLight,
	component: lighten(colors.blueDark, 5),
}

module.exports = tokens