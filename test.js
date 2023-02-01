import {Field,VALIDATION} from "./index.js"

	Field.add("LASTNAME",{
		PLACEHOLDER:{
			DEFAULT:"Votre nom de famille"
		},
		LABEL:{
			DEFAULT:"Entrez votre nom de famille"
		},
		MINIMUM_ERROR_MESSAGE:{
			DEFAULT:"Votre nom de famille doit contenir au moins 3 caractères"
		},
		MAXIMUM_ERROR_MESSAGE:{
			DEFAULT:"Votre nom de famille doit contenir au plus 255 caractères"
		},
		MUST_NOT_CONTAIN_NUMBER:{
			DEFAULT:"Votre nom de famille ne doit pas contenir de chiffre"
		},
		EMPTY_MESSAGE:{
			DEFAULT:"Veuillez saisir votre nom de famille"
		},
	})
	Field.add("FIRSTNAME",{
		PLACEHOLDER:{
			DEFAULT:"Votre prénom"
		},
		LABEL:{
			DEFAULT:"Entrez votre prénom"
		},
		MINIMUM_ERROR_MESSAGE:{
			DEFAULT:"Votre prénom doit contenir au moins 3 caractères"
		},
		MAXIMUM_ERROR_MESSAGE:{
			DEFAULT:"Votre prénom doit contenir au plus 255 caractères"
		},
		MUST_NOT_CONTAIN_NUMBER:{
			DEFAULT:"Votre prénom ne doit pas contenir de chiffre"
		},
		EMPTY_MESSAGE:{
			DEFAULT:"Veuillez saisir votre prénom"
		},
	})
	Field.add("EMAIL",{
		PLACEHOLDER:{
			DEFAULT:"Votre adresse email"
		},
		LABEL:{
			DEFAULT:"Entrez votre adresse email"
		},
		INVALID_MESSAGE:{
			DEFAULT:"Votre adresse email est invalide"
		},
		EMPTY_MESSAGE:{
			DEFAULT:"Veuillez saisir votre adresse email"
		},
	})
	Field.add("PASSWORD",{
		PLACEHOLDER:{
			DEFAULT:"Votre mot de passe"
		},
		LABEL:{
			DEFAULT:"Entrez votre mot de passe"
		},
		INVALID_MESSAGE:{
			DEFAULT:"Votre mot de passe doit contenir au minimum 8 caractères, une majuscule, un nombre et un caractère spécial"
		},
		EMPTY_MESSAGE:{
			DEFAULT:"Veuillez saisir votre mot de passe"
		},
	})
	Field.add("CONFIRM_PASSWORD",{
		PLACEHOLDER:{
			DEFAULT:"Confirmation de votre mot de passe"
		},
		LABEL:{
			DEFAULT:"Entrez a nouveau votre mot de passe"
		},
		INVALID_MESSAGE:{
			DEFAULT:"Les mots de passe ne correspondent pas"
		},
		EMPTY_MESSAGE:{
			DEFAULT:"Veuillez saisir la confirmation de votre mot de passe"
		},
	})
VALIDATION.setup()
