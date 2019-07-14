const grays = require('../../colors/grays')
const colors = require('../../colors/dark-palette')
const { lighten } = require('../../colors/utils')

tokens = {
	background: grays.gray700,
	foreground: grays.gray100,
	punctuation: grays.gray200,
	string: colors.green,
	numeric: colors.teal,
	units: grays.gray200,
	null: colors.teal,
	boolean: colors.teal,
	constant: colors.teal,
	variable: colors.pinkLight,
	property: colors.pinkDark,
	keyword: colors.purple,
	control: colors.purple,
	this: colors.pinkLight,
	class: colors.yellow,
	function: colors.blueLight,
	comment: colors.blueDark,
	tag: colors.orange,
	attribute: colors.pinkDark,
	component: lighten(colors.orange, 5),
}

module.exports = tokens