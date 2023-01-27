import STRUCTURE from "common/structure/FIELD/FIELD.STRUCTURE.js"

class FIELD{
	static LASTNAME = {
		...STRUCTURE.LASTNAME,
		PLACEHOLDER:{
			DEFAULT:"Ny anaranao"
		},
		LABEL:{
			DEFAULT:"Ampidiro ny anaranao"
		},
		MINIMUM_ERROR_MESSAGE:{
			DEFAULT:"Ny anaranao dia tsy maintsy misy litera 3 farafahakeliny"
		},
		MAXIMUM_ERROR_MESSAGE:{
			DEFAULT:"Ny anaranao dia tsy maintsy misy litera 255 farafahabehany"
		},
		MUST_NOT_CONTAIN_NUMBER:{
			DEFAULT:"Ny anaranao dia tsy azo asiana tarehimarika"
		},
		EMPTY_MESSAGE:{
			DEFAULT:"Fenoy ny anaranao"
		},
	}
	static FIRSTNAME = {
		...STRUCTURE.FIRSTNAME,
		PLACEHOLDER:{
			DEFAULT:"Ny fanampin'anaranao"
		},
		LABEL:{
			DEFAULT:"Ampidiro ny fanampin'anaranao"
		},
		MINIMUM_ERROR_MESSAGE:{
			DEFAULT:"Ny fanampin'anaranao dia tsy maintsy misy litera 3 farafahakeliny"
		},
		MAXIMUM_ERROR_MESSAGE:{
			DEFAULT:"Ny fanampin'anaranao dia tsy maintsy misy litera 255 farafahabehany"
		},
		MUST_NOT_CONTAIN_NUMBER:{
			DEFAULT:"Ny fanampin'anaranao dia tsy azo asiana tarehimarika"
		},
		EMPTY_MESSAGE:{
			DEFAULT:"Fenoy ny fanampin'anaranao"
		},
	}
	static EMAIL = {
		...STRUCTURE.EMAIL,
		PLACEHOLDER:{
			DEFAULT:"Ny mailakao"
		},
		LABEL:{
			DEFAULT:"Ampidiro ny mailakao"
		},
		INVALID_MESSAGE:{
			DEFAULT:"Hamarino tsara ny mailakao"
		},
		EMPTY_MESSAGE:{
			DEFAULT:"Fenoy ny mailakao"
		},
	}
	static PASSWORD = {
		...STRUCTURE.PASSWORD,
		PLACEHOLDER:{
			DEFAULT:"Ny tenimiafinao"
		},
		LABEL:{
			DEFAULT:"Ampidiro ny tenimiafinao"
		},
		INVALID_MESSAGE:{
			DEFAULT:"Ny tenimiafinao dia tsy maintsy misy litera 8 farafahakeliny, renintsoratra sy terehimarika ary litera manokana"
		},
		EMPTY_MESSAGE:{
			DEFAULT:"Fenoy ny tenimiafinao"
		},
	}
	static CONFIRM_PASSWORD = {
		...STRUCTURE.CONFIRM_PASSWORD,
		PLACEHOLDER:{
			DEFAULT:"Fanamarinana ny tenimiafinao"
		},
		LABEL:{
			DEFAULT:"Averno ampidirina ny tenimiafinao"
		},
		INVALID_MESSAGE:{
			DEFAULT:"Tsy mitovy ireo tenimiafinao"
		},
		EMPTY_MESSAGE:{
			DEFAULT:"Fenoy ny fanamarinana ny tenimiafinao"
		},
	}
}

export default FIELD;