import { waitInput, handleInput } from "core/utilities/input/input.js";
import { getIndex, getData, subscribe } from "tools/indexation/indexation.js";

class Field{
	name;
	type;
	placeholder;
	validations = [];
	restrictions = [];
	limitations = [];
	errorMessage;
	isValid;
	value;
	instance;
	linked;

	static create(params = {}){
		var {STRUCTURE, domain = "DEFAULT", VALIDATION, RESTRICTION, LIMITATION} = params
        var field = new Field();
        if(
        	!STRUCTURE ||
        	!VALIDATION ||
        	!LIMITATION ||
        	!RESTRICTION
        ){
        	return field;
        }
        field.name = STRUCTURE.NAME;
        field.type = STRUCTURE.TYPE;
        field.placeholder = "";
        if(STRUCTURE.PLACEHOLDER){
        	field.placeholder = STRUCTURE.PLACEHOLDER[domain]
        }
        field.label = "";
        if(STRUCTURE.LABEL){
        	field.label = STRUCTURE.LABEL[domain]
        }
        field.required = false;
        if(STRUCTURE.REQUIRED !== undefined){
        	field.required = STRUCTURE.REQUIRED;
        }
        field.value = "";

        field.addValidations(VALIDATION);
        field.addRestrictions(RESTRICTION);
        field.addLimitations(LIMITATION);

        return field
	}

	getElement(){
		var element = $(`[name="${this.name}"]`)
		return element;
	}

	checkLimitations(event){
		if (event) {
			this.limitations.map((limitation) =>{
				limitation.verification(event)
			})
		}
	}

	checkValidation(event){
		this.checkLimitations(event);
		var element = this.getElement();
		var value = $(element).val()
		this.value = value
		this.isValid = true
		this.errorMessage = "";
		this.instance.refresh();
		if(event && this.linked && this.linked.value){
			this.linked.checkValidation(false)
		}
		waitInput(this.name, () =>{
			this.isValid = true
			this.validations.map((validation) =>{
				if(this.isValid){
					if(validation.check){
						if(!validation.check(this.linked)(value)){
							this.isValid = false
							this.errorMessage = validation.message
						}
					}
					if(validation.verification){
						if(!validation.verification(value)){
							this.isValid = false
							this.errorMessage = validation.message
						}
					}
				}
			});
			this.value = value
			this.instance.refresh()
		}, 500)
	}

	checkRestriction(event){
		this.restrictions.map((restriction) =>{
			restriction.verification(event)
		});
		this.instance.refresh()
	}

	addValidations(validations){
		validations.map((validation) =>{
			this.validations.push(validation)
		})
	}

	addRestrictions(restrictions){
		restrictions.map((restriction) =>{
			this.restrictions.push(restriction)
		})
	}

	addLimitations(limitations){
		limitations.map((limitation) =>{
			this.limitations.push(limitation)
		})
	}
}

export default Field