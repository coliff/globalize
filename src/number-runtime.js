define([
	"./common/runtime-key",
	"./common/create-error/unsupported-feature",
	"./common/validate/parameter-presence",
	"./common/validate/parameter-type/number",
	"./common/validate/parameter-type/string",
	"./core-runtime",
	"./number/format",
	"./number/parse",
	"./util/number/round"
], function( runtimeKey, createErrorUnsupportedFeature, validateParameterPresence,
	validateParameterTypeNumber, validateParameterTypeString, Globalize, numberFormat,
	numberParse, numberRound ) {

Globalize._createErrorUnsupportedFeature = createErrorUnsupportedFeature;
Globalize._numberFormat = numberFormat;
Globalize._numberParse = numberParse;
Globalize._numberRound = numberRound;
Globalize._validateParameterTypeNumber = validateParameterTypeNumber;

Globalize._validateParameterPresence = validateParameterPresence;
Globalize._validateParameterTypeString = validateParameterTypeString;

Globalize.prototype.numberFormatter =
Globalize.prototype.numberParser = function() {
	return Globalize[ runtimeKey( this.locale, arguments ) ];
};

return Globalize;

});
