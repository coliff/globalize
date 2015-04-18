define([
	"./common/runtime-key",
	"./common/validate/parameter-presence",
	"./common/validate/parameter-type/date",
	"./common/validate/parameter-type/string",
	"./core-runtime",
	"./date/format",
	"./date/parse",
	"./date/tokenizer",

	"./number-runtime"
], function( runtimeKey, validateParameterPresence, validateParameterTypeDate,
	validateParameterTypeString, Globalize, dateFormat, dateParse, dateTokenizer ) {

Globalize._dateFormat = dateFormat;
Globalize._dateParser = dateParse;
Globalize._dateTokenizer = dateTokenizer;
Globalize._validateParameterTypeDate = validateParameterTypeDate;

Globalize._validateParameterPresence = validateParameterPresence;
Globalize._validateParameterTypeString = validateParameterTypeString;

Globalize.prototype.dateFormatter =
Globalize.prototype.dateParser = function() {
	return Globalize[ runtimeKey( this.locale, arguments ) ];
};

return Globalize;

});
