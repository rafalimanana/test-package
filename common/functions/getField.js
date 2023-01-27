import FIELDMG from "common/structure/FIELD/FIELD.mg.js"
import FIELDFR from "common/structure/FIELD/FIELD.fr.js"

function getField(){
	if(window.lang == "MG"){
		return FIELDMG
	}
	else if(window.lang == "FR"){
		return FIELDFR
	}
}

export { getField }