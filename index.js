import VALIDATION from "common/structure/VALIDATION/VALIDATION.js";
import RESTRICTION from "common/structure/RESTRICTION/RESTRICTION.js";
import LIMITATION from "common/structure/LIMITATION/LIMITATION.js";
import { getField } from "common/functions/getField.js";
import { getButton } from "common/functions/getButton.js";
import Field from "common/classes/Field.js";
import Button from "common/classes/Button.js";


var FIELD = getField();
var BUTTON = getButton();

var createButtonValidation = function(params={}) {
	var {text="", required_fields = []} = params;
	if (!text) {
		text=BUTTON.INSCRIPTION_VALIDATION
	}
	return Button.create({
        BUTTON: text,
        required_fields: required_fields 
	})
}
var createFieldValidation = function(KEY) {
	return Field.create({
        STRUCTURE: FIELD[KEY],
        VALIDATION: VALIDATION[KEY].INSCRIPTION,
        RESTRICTION: RESTRICTION[KEY],
        LIMITATION: LIMITATION[KEY],
    })
};
export { createButtonValidation, createFieldValidation };