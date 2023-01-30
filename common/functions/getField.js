import FIELDMG from "common/structure/FIELD/FIELD.mg.js"
import FIELDFR from "common/structure/FIELD/FIELD.fr.js"

function getField(lang="fr"){
	if(lang == "MG" || lang == "mg"){
		return FIELDMG
	}
	else {
		return FIELDFR
	}
}

export { getField }