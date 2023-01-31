import Validation from "common/classes/Validation.js";

class VALIDATION{

	static LASTNAME = {
		INSCRIPTION:[
			Validation.build()("LASTNAME", "notEmpty", "EMPTY_MESSAGE"),
			Validation.build()("LASTNAME", "min","MINIMUM_ERROR_MESSAGE",3),
			Validation.build()("LASTNAME", "max","MAXIMUM_ERROR_MESSAGE",255),
			Validation.build()("LASTNAME", "notContainNumber","MUST_NOT_CONTAIN_NUMBER"),
		],
		LIST_USER_EDIT:[
			Validation.build({domain:"BO"})("LASTNAME", "notEmpty", "EMPTY_MESSAGE", null),
			Validation.build({domain:"BO"})("LASTNAME", "min","MINIMUM_ERROR_MESSAGE",3),
			Validation.build({domain:"BO"})("LASTNAME", "max","MAXIMUM_ERROR_MESSAGE",255),
			Validation.build({domain:"BO"})("LASTNAME", "notContainNumber","MUST_NOT_CONTAIN_NUMBER",null),
		]
	}
	static FIRSTNAME = {
		INSCRIPTION:[
			Validation.build()("FIRSTNAME", "notEmpty", "EMPTY_MESSAGE"),
			Validation.build()("FIRSTNAME", "min","MINIMUM_ERROR_MESSAGE",3),
			Validation.build()("FIRSTNAME", "max","MAXIMUM_ERROR_MESSAGE",255),
			Validation.build()("FIRSTNAME", "notContainNumber","MUST_NOT_CONTAIN_NUMBER"),
		]
	}
	static EMAIL = {
		INSCRIPTION:[
			Validation.build()("EMAIL", "notEmpty", "EMPTY_MESSAGE"),
			Validation.build()("EMAIL", "emailValid","INVALID_MESSAGE"),
		]
	}
	static PASSWORD = {
		INSCRIPTION:[
			Validation.build()("PASSWORD", "notEmpty", "EMPTY_MESSAGE"),
			Validation.build()("PASSWORD", "passwordValid","INVALID_MESSAGE"),
		]
	}
	static CONFIRM_PASSWORD = {
		INSCRIPTION:[
			Validation.build()("CONFIRM_PASSWORD", "notEmpty", "EMPTY_MESSAGE"),
			Validation.build({action:"check"})("CONFIRM_PASSWORD", "confirmPassword","INVALID_MESSAGE"),
		]
	}
}

export default VALIDATION;