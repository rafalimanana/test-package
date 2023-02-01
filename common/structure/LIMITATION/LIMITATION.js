import Limitation from "../../../common/classes/Limitation.js";

class LIMITATION {
	static LASTNAME = [
		{
			verification: Limitation.max(255),
		},
	];
	static FIRSTNAME = [
		{
			verification: Limitation.max(255),
		},
	];
	static EMAIL = [
		{
			verification: Limitation.max(255),
		},
	];
	static PASSWORD = [
		{
			verification: Limitation.max(255),
		},
	];
	static CONFIRM_PASSWORD = [
		{
			verification: Limitation.max(255),
		},
	];
}

export default LIMITATION;
