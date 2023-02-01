import Restriction from "../../../common/classes/Restriction.js";

class RESTRICTION {
	static LASTNAME = [
		{
			verification: Restriction.disallowNumber(),
		},
	];
	static FIRSTNAME = [
		{
			verification: Restriction.disallowNumber(),
		},
	];
	static EMAIL = [];
	static PASSWORD = [];
	static CONFIRM_PASSWORD = [];
}

export default RESTRICTION;
