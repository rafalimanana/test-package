import { getIndex, getData, subscribe } from "tools/indexation/indexation.js";

class Button{
	text;
	required_fields=[];
	static create(params = {}){
		var {
			BUTTON, 
			required_fields, 
			domain = "DEFAULT"
		} = params;
		var button = new Button();
		button.text = BUTTON.TEXT[domain];
		button.required_fields = required_fields;

        return button
	}
	handleValidation(event) {
		event.preventDefault()
		var isValid = true;
		this.required_fields.map((field) => {
			field.validations.map((validation) =>{
				if(validation.check){
					if(!validation.check(field.linked)(field.value)){
						field.isValid = false
						field.errorMessage = validation.message
					}
				}
				if(validation.verification){
					if(!validation.verification(field.value)){
						field.isValid = false
						field.errorMessage = validation.message
					}
				}
			});
			isValid = isValid && field.isValid;
		})
		this.instance.refresh();
		if (!isValid) {
			return;
		}
		alert("OK")
	}
}

export default Button