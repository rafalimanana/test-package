import { waitInput, handleInput } from "core/utilities/input/input.js";
import { getIndex, getData, subscribe } from "tools/indexation/indexation.js";

class FieldPW {
	static PARAMS = {};

	static add(KEY, params={}){
        FieldPW.PARAMS[KEY] = params;
	}

	static get(){
		if (
			FieldPW.PARAMS && 
			Object.keys(FieldPW.PARAMS).length !== 0
		) {
			return FieldPW.PARAMS;
		}
		return {}
	}
}

export default FieldPW