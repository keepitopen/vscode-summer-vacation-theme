const neutrals = require('../../colors/light-neutrals');
const colors = require('../../colors/light-palette');
const tokens = require('../syntax/SummerVacation-light');
const { fade, lighten, darken } = require('../../colors/utils');

const transparent = fade('#000', 0);

const uiColors = {

	// Base colors
	focusBorder: colors.blueDark,
	foreground: neutrals.gray100,
	'widget.shadow': fade(neutrals.gray400, 0.4),
	'selection.background': fade(colors.blueDark, 0.333),
	descriptionForeground: colors.gray100,
	errorForeground: colors.red,
	'icon.background': colors.blueDark,

	// Text colors
	'textBlockQuote.background': neutrals.gray800,
	'textBlockQuote.border': transparent,
	'textCodeBlock.background': neutrals.gray800,
	'textLink.foreground': colors.blueDark,
	'textLink.activeForeground': '#000',
	'textSeparator.foreground': neutrals.gray500,

	// Button control
	'button.background': colors.blueDark,
	'button.foreground': '#FFF',
	'button.hoverBackground': darken(colors.blueDark, 10),

	// Dropdown control
	'dropdown.background': neutrals.gray700,
	'dropdown.foreground': neutrals.gray100,
	'dropdown.border': neutrals.gray500,
	'dropdown.listBackground': neutrals.gray600,

	// Input control
	'input.background': neutrals.gray700,
	'input.foreground': neutrals.gray100,
	'input.placeholderForeground': neutrals.gray400,
	'inputValidation.errorBackground': lighten(colors.red, 20),
	'inputValidation.errorBorder': colors.red,
	'inputValidation.infoBackground': lighten(colors.blueDark, 20),
	'inputValidation.infoBorder': colors.blueDark,
	'inputValidation.warningBackground': lighten(colors.yellow, 20),
	'inputValidation.warningBorder': colors.orange,

	// Scrollbar control
	'scrollbarSlider.background': fade(neutrals.gray400, 0.4),
	'scrollbarSlider.hoverBackground': fade(neutrals.gray400, 0.6),
	'scrollbarSlider.activeBackground': neutrals.gray400,

	// Badge
	'badge.background': colors.blueDark,
	'badge.foreground': '#FFF',

	// Lists and trees
	'list.activeSelectionBackground': colors.blueDark,
	'list.activeSelectionForeground': '#FFF',
	'list.inactiveSelectionBackground': neutrals.gray500,
	'list.inactiveSelectionForeground': neutrals.gray100,
	'list.focusBackground': neutrals.gray700,
	'list.focusForeground': '#000',
	'list.hoverBackground': neutrals.gray500,
	'list.hoverForeground': neutrals.gray100,
	'list.dropBackground': fade(colors.blueDark, 0.333),
	'list.highlightForeground': colors.blueDark,
	'list.invalidItemForeground': colors.red,
	'list.errorForeground': colors.red,
	'list.warningForeground': colors.yellow,
	'tree.indentGuidesStroke': neutrals.gray400,

	// Activity Bar
	'activityBar.background': colors.blueDark,
	'activityBar.inactiveForeground': lighten(colors.blueLight, 10),
	'activityBar.border': transparent,
	'activityBar.activeBackground': darken(colors.blueDark, 7.5),
	'activityBar.foreground': '#FFF',
	'activityBar.activeBorder': transparent,
	'activityBarBadge.background': colors.pinkLight,
	'activityBarBadge.foreground': '#FFF',

	// Side Bar
	'sideBar.background': neutrals.gray600,
	'sideBar.foreground': neutrals.gray100,
	'sideBar.border': transparent,
	'sideBar.dropBackground': fade(colors.blueDark, 0.333),
	'sideBarTitle.foreground': neutrals.gray100,
	'sideBarSectionHeader.background': neutrals.gray500,
	'sideBarSectionHeader.foreground': neutrals.gray100,
	'sideBarSectionHeader.border': transparent,

	// Editor Groups & Tabs
	'editorGroup.border': neutrals.gray500,
	'editorGroup.dropBackground': fade(colors.blueDark, 0.333),
	'editorGroupHeader.noTabsBackground': neutrals.gray700,
	'editorGroupHeader.tabsBackground': neutrals.gray500,
	'editorGroupHeader.tabsBorder': transparent,
	'editorGroupHeader.border': neutrals.gray800,
	'editorGroup.emptyBackground': neutrals.gray700,
	'editorGroup.focusedEmptyBorder': transparent,
	'tab.border': neutrals.gray500,
	// -- Active
	'tab.activeBackground': neutrals.gray700,
	'tab.unfocusedActiveBackground': neutrals.gray700,
	'tab.activeForeground': colors.blueDark,
	'tab.unfocusedActiveForeground': neutrals.gray100,
	'tab.activeBorder': transparent,
	'tab.unfocusedActiveBorder': transparent,
	'tab.activeBorderTop': colors.blueDark,
	'tab.unfocusedActiveBorderTop': fade(colors.blueDark, 0.5),
	// -- Inactive
	'tab.inactiveBackground': neutrals.gray600,
	'tab.inactiveForeground': neutrals.gray200,
	'tab.unfocusedInactiveForeground': neutrals.gray200,
	// -- Modified
	'tab.activeModifiedBorder': colors.green,
	'tab.inactiveModifiedBorder': fade(colors.green, 0.5),
	'tab.unfocusedActiveModifiedBorder': fade(colors.green, 0.5),
	'tab.unfocusedInactiveModifiedBorder': fade(colors.green, 0.5),

	// Editor colors
	'editor.background': neutrals.gray700,
	'editor.foreground': neutrals.gray100,
	'editorLineNumber.foreground': neutrals.gray400,
	'editorLineNumber.activeForeground': neutrals.gray100,
	'editorCursor.background': neutrals.gray800,
	'editorCursor.foreground': neutrals.gray200,
	'editor.selectionBackground': fade(neutrals.gray500, 0.6),
	'editor.selectionHighlightBackground': fade(neutrals.gray500, 0.4),
	'editor.wordHighlightBackground': fade(colors.blueDark, 0.1),
	'editor.wordHighlightStrongBackground': fade(colors.blueDark, 0.15),
	'editor.findMatchBackground': fade(colors.green, 0.15),
	'editor.findMatchHighlightBackground': fade(colors.green, 0.1),
	'editor.hoverHighlightBackground': fade(neutrals.gray600, 0.5),
	'editor.lineHighlightBackground': fade(neutrals.gray800, 0.75),
	'editor.rangeHighlightBackground': fade('#000000', 0.05),
	'editorLink.activeForeground': colors.blueDark,
	'editorWhitespace.foreground': darken(neutrals.gray700, 2),
	'editorIndentGuide.background': neutrals.gray500,
	'editorIndentGuide.activeBackground': darken(neutrals.gray500, 3),
	'editorRuler.foreground': neutrals.gray600,
	'editorCodeLens.foreground': neutrals.gray400,
	'editorBracketMatch.background': neutrals.gray500,
	'editorBracketMatch.border': fade(neutrals.gray500, 0.3),
	'editorLightBulb.foreground': lighten(colors.yellow, 5),
	'editorLightBulbAutoFix.foreground': colors.teal,
	'problemsErrorIcon.foreground': colors.red,
	'problemsWarningIcon.foreground': colors.yellow,
	'problemsInfoIcon.foreground': colors.blueDark,
	// -- Overview ruler
	'editorOverviewRuler.border': transparent,
	'editorOverviewRuler.findMatchForeground': fade(neutrals.gray400, 0.25),
	'editorOverviewRuler.rangeHighlightForeground': fade(neutrals.gray400, 0.25),
	'editorOverviewRuler.selectionHighlightForeground': fade(neutrals.gray400, 0.25),
	'editorOverviewRuler.wordHighlightForeground': fade(neutrals.gray500, 0.25),
	'editorOverviewRuler.wordHighlightStrongForeground': fade(neutrals.gray500, 0.25),
	'editorOverviewRuler.modifiedForeground': colors.green,
	'editorOverviewRuler.addedForeground': colors.teal,
	'editorOverviewRuler.deletedForeground': colors.red,
	'editorOverviewRuler.errorForeground': colors.red,
	'editorOverviewRuler.warningForeground': colors.yellow,
	'editorOverviewRuler.infoForeground': colors.blueDark,
	'editorOverviewRuler.bracketMatchForeground': fade(neutrals.gray500, 0.333),
	// -- Errors and warnings
	'editorError.foreground': colors.red,
	'editorWarning.foreground': colors.yellow,
	'editorInfo.foreground': colors.blueLight,
	'editorHint.foreground': colors.green,
	// -- Unused source code
	'editorUnnecessaryCode.opacity': fade('#000000', 0.6),
	// -- Gutter
	'editorGutter.background': transparent,
	'editorGutter.modifiedBackground': colors.green,
	'editorGutter.addedBackground': colors.teal,
	'editorGutter.deletedBackground': colors.red,

	// Diff editor colors
	'diffEditor.insertedTextBackground': fade(colors.teal, 0.05),
	'diffEditor.removedTextBackground': fade(colors.red, 0.075),

	// Editor widget colors
	'editorWidget.background': neutrals.gray800,
	'editorWidget.border': neutrals.gray500,
	'editorWidget.resizeBorder': neutrals.gray500,
	'editorSuggestWidget.background': neutrals.gray800,
	'editorSuggestWidget.border': neutrals.gray500,
	'editorSuggestWidget.foreground': neutrals.gray100,
	'editorSuggestWidget.highlightForeground': colors.blueDark,
	'editorSuggestWidget.selectedBackground': neutrals.gray500,
	'editorHoverWidget.background': neutrals.gray800,
	'editorHoverWidget.border': neutrals.gray500,
	'debugExceptionWidget.background': fade(colors.red, 0.25),
	'debugExceptionWidget.border': colors.red,
	'editorMarkerNavigation.background': neutrals.gray600,

	// Peek view colors
	'peekView.border': neutrals.gray500,
	'peekViewEditor.background': neutrals.gray700,
	'peekViewEditor.matchHighlightBackground': fade(colors.green, 0.1),
	'peekViewTitle.background': neutrals.gray600,
	'peekViewTitleLabel.foreground': '#000',
	'peekViewTitleDescription.foreground': neutrals.gray300,
	'peekViewResult.background': neutrals.gray800,
	'peekViewResult.lineForeground': neutrals.gray200,
	'peekViewResult.fileForeground': '#000',
	'peekViewResult.matchHighlightBackground': fade(colors.green, 0.1),
	'peekViewResult.selectionBackground': colors.darkBlue,
	'peekViewResult.selectionForeground': '#000',

	// Merge conflicts
	'merge.border': transparent,
	'merge.currentHeaderBackground': fade(colors.green, 0.5),
	'merge.currentContentBackground': fade(colors.green, 0.25),
	'editorOverviewRuler.currentContentForeground': colors.green,
	'merge.incomingHeaderBackground': fade(colors.blueDark, 0.5),
	'merge.incomingContentBackground': fade(colors.blueDark, 0.25),
	'editorOverviewRuler.incomingContentForeground': colors.blueDark,
	'merge.commonHeaderBackground': transparent,
	'merge.commonContentBackground': transparent,
	'editorOverviewRuler.commonContentForeground': transparent,

	// Panel colors
	'panel.background': neutrals.gray800,
	'panel.border': neutrals.gray500,
	'panelSection.border': neutrals.gray500,
	'panelSection.dropBackground': fade(colors.blueDark, 0.333),
	'panelTitle.activeBorder': colors.blueDark,
	'panelTitle.activeForeground': '#000',
	'panelTitle.inactiveForeground': neutrals.gray300,
	'panelSectionHeader.background': neutrals.gray500,
	'panelSectionHeader.border': neutrals.gray500,

	// Status Bar colors
	'statusBar.background': neutrals.gray700,
	'statusBar.foreground': neutrals.gray100,
	'statusBar.border': neutrals.gray800,
	'statusBar.debuggingBackground': neutrals.gray700,
	'statusBar.debuggingForeground': neutrals.gray100,
	'statusBar.debuggingBorder': colors.orange,
	'statusBar.noFolderBackground': neutrals.gray700,
	'statusBar.noFolderForeground': neutrals.gray100,
	'statusBar.noFolderBorder': transparent,
	'statusBarItem.activeBackground': fade(colors.blueDark, 0.5),
	'statusBarItem.hoverBackground': neutrals.gray800,
	'statusBarItem.prominentBackground': transparent,
	'statusBarItem.prominentForeground': '#000',
	'statusBarItem.prominentHoverBackground': neutrals.gray800,

	// Title Bar colors
	'titleBar.activeBackground': neutrals.gray800,
	'titleBar.activeForeground': neutrals.gray200,
	'titleBar.inactiveBackground': neutrals.gray800,
	'titleBar.inactiveForeground': neutrals.gray300,
	'titleBar.border': transparent,

	// Menu Bar colors
	'menubar.selectionForeground': '#000',
	'menubar.selectionBackground': neutrals.gray700,
	'menubar.selectionBorder': transparent,
	'menu.foreground': neutrals.gray200,
	'menu.background': neutrals.gray800,
	'menu.selectionForeground': '#000',
	'menu.selectionBackground': neutrals.gray600,
	'menu.selectionBorder': transparent,
	'menu.separatorBackground': neutrals.gray400,

	// Notification colors
	'notificationCenter.border': neutrals.gray500,
	'notificationCenterHeader.background': neutrals.gray600,
	'notificationCenterHeader.foreground': neutrals.gray100,
	'notificationToast.border': neutrals.gray500,
	'notifications.background': neutrals.gray700,
	'notifications.foreground': neutrals.gray100,
	'notifications.border': neutrals.gray500,
	'notificationLink.foreground': colors.blueDark,

	// Extensions
	'extensionButton.prominentForeground': '#FFF',
	'extensionButton.prominentBackground': colors.green,
	'extensionButton.prominentHoverBackground': darken(colors.green, 10),

	// Integrated Terminal colors
	'terminal.background':          neutrals.gray800,
	'terminal.border':              neutrals.gray500,
	'terminal.foreground':          neutrals.gray100,
	'terminal.ansiBlack':           neutrals.gray800,
	'terminal.ansiBrightBlack':     neutrals.gray200,
	'terminal.ansiRed':             colors.red,
	'terminal.ansiBrightRed':       colors.pinkDark,
	'terminal.ansiGreen':           colors.green,
	'terminal.ansiBrightGreen':     colors.green,
	'terminal.ansiYellow':          colors.orange,
	'terminal.ansiBrightYellow':    colors.yellow,
	'terminal.ansiBlue':            colors.blueDark,
	'terminal.ansiBrightBlue':      colors.blueDark,
	'terminal.ansiMagenta':         colors.purple,
	'terminal.ansiBrightMagenta':   colors.purple,
	'terminal.ansiCyan':            colors.teal,
	'terminal.ansiBrightCyan':      colors.teal,
	'terminal.ansiWhite':           neutrals.gray100,
	'terminal.ansiBrightWhite':     '#000',
	'terminal.selectionBackground': fade(neutrals.gray600, 0.5),
	'terminalCursor.background':    neutrals.gray700,
	'terminalCursor.foreground':    neutrals.gray200,

	// Debug
	'debugToolBar.background': neutrals.gray600,
	'debugToolBar.border': transparent,
	'editor.stackFrameHighlightBackground': fade(neutrals.gray800, 0.5),
	'editor.focusedStackFrameHighlightBackground': fade(neutrals.gray800, 0.65),
	"debugConsole.infoForeground": neutrals.gray100,
	"debugConsole.warningForeground": colors.yellow,
	"debugConsole.errorForeground": colors.red,
	"debugConsole.sourceForeground": neutrals.gray300,

	// Welcome page
	'welcomePage.background': neutrals.gray700,
	'welcomePage.buttonBackground': colors.blueDark,
	'welcomePage.buttonHoverBackground': darken(colors.blueDark, 10),
	'walkThrough.embeddedEditorBackground': neutrals.gray700,

	// Git colors
	'gitDecoration.addedResourceForeground': colors.teal,
	'gitDecoration.modifiedResourceForeground': colors.green,
	'gitDecoration.deletedResourceForeground': colors.red,
	'gitDecoration.untrackedResourceForeground': colors.yellow,
	'gitDecoration.ignoredResourceForeground': neutrals.gray400,
	'gitDecoration.conflictingResourceForeground': colors.orange,
	'gitDecoration.submoduleResourceForeground': colors.blueDark,

	// Settings Editor colors
	'settings.headerForeground': neutrals.gray100,
	'settings.modifiedItemIndicator': colors.blueDark,
	'settings.dropdownBackground': neutrals.gray700,
	'settings.dropdownForeground': neutrals.gray100,
	'settings.dropdownBorder': neutrals.gray500,
	'settings.dropdownListBorder': transparent,
	'settings.checkboxBackground': neutrals.gray700,
	'settings.checkboxForeground': colors.blueDark,
	'settings.checkboxBorder': neutrals.gray500,
	'settings.textInputBackground': neutrals.gray700,
	'settings.textInputForeground': neutrals.gray100,
	'settings.textInputBorder': neutrals.gray500,
	'settings.numberInputBackground': neutrals.gray700,
	'settings.numberInputForeground': neutrals.gray100,
	'settings.numberInputBorder': neutrals.gray500,

	// Breadcrumbs
	'breadcrumb.foreground': neutrals.gray200,
	'breadcrumb.background': neutrals.gray700,
	'breadcrumb.focusForeground': neutrals.gray100,
	'breadcrumb.activeSelectionForeground': '#000',
	'breadcrumbPicker.background': neutrals.gray700,

	// Snippets colors
	'editor.snippetTabstopHighlightBackground': fade(neutrals.gray600, 0.5),
	'editor.snippetTabstopHighlightBorder': fade(neutrals.gray600, 0.5),
	'editor.snippetFinalTabstopHighlightBackground': fade(colors.blueDark, 0.1),
	'editor.snippetFinalTabstopHighlightBorder': fade(colors.blueDark, 0.15),

	// Symbol icons
	'symbolIcon.arrayForeground': tokens.class,
	'symbolIcon.booleanForeground': tokens.constant,
	'symbolIcon.classForeground': tokens.class,
	'symbolIcon.colorForeground': tokens.variable,
	'symbolIcon.constructorForeground': tokens.keyword,
	'symbolIcon.constantForeground': tokens.constant,
	'symbolIcon.enumeratorForeground': tokens.class,
	'symbolIcon.enumeratorMemberForeground': tokens.property,
	'symbolIcon.eventForeground': tokens.variable,
	'symbolIcon.fieldForeground': tokens.property,
	'symbolIcon.fileForeground': tokens.foreground,
	'symbolIcon.folderForeground': tokens.foreground,
	'symbolIcon.functionForeground': tokens.function,
	'symbolIcon.interfaceForeground': tokens.type,
	'symbolIcon.keyForeground': tokens.property,
	'symbolIcon.keywordForeground': tokens.keyword,
	'symbolIcon.methodForeground': tokens.function,
	'symbolIcon.moduleForeground': tokens.keyword,
	'symbolIcon.namespaceForeground': tokens.class,
	'symbolIcon.nullForeground': tokens.constant,
	'symbolIcon.numberForeground': tokens.constant,
	'symbolIcon.objectForeground': tokens.class,
	'symbolIcon.operatorForeground': tokens.punctuation,
	'symbolIcon.packageForeground': tokens.keyword,
	'symbolIcon.propertyForeground': tokens.property,
	'symbolIcon.referenceForeground': tokens.foreground,
	'symbolIcon.snippetForeground': tokens.foreground,
	'symbolIcon.stringForeground': tokens.string,
	'symbolIcon.structForeground': tokens.class,
	'symbolIcon.textForeground': tokens.foreground,
	'symbolIcon.typeParameterForeground': tokens.type,
	'symbolIcon.unitForeground': tokens.constant,
	'symbolIcon.variableForeground': tokens.variable,
};

module.exports = uiColors;
