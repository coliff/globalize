define([
	"./common/create-error",
	"./common/runtime-key",
	"./common/validate/parameter-presence",
	"./common/validate/parameter-type",
	"./common/validate/parameter-type/string",
	"./util/regexp/escape",
	"./util/string/pad"
], function( createError, runtimeKey, validateParameterPresence, validateParameterType,
	validateParameterTypeString, regexpEscape, stringPad ) {

function Globalize( locale ) {
	if ( !( this instanceof Globalize ) ) {
		return new Globalize( locale );
	}

	validateParameterPresence( locale, "locale" );
	validateParameterTypeString( locale, "locale" );

	this.locale = locale;
}

Globalize._createError = createError;
Globalize._regexpEscape = regexpEscape;
Globalize._runtimeKey = runtimeKey;
Globalize._stringPad = stringPad;
Globalize._validateParameterPresence = validateParameterPresence;
Globalize._validateParameterTypeString = validateParameterTypeString;
Globalize._validateParameterType = validateParameterType;

return Globalize;

});
