import Field from "index.js";

class Validation{
	static build(params = {}){
		var FIELD = Field.get();
		var {action = "verification", domain = "DEFAULT"} = params;
		return (key, name, message, params) =>{
			if(action == "check"){
				return {
					[action]:Validation[name],
					message:FIELD[key][message][domain]
				}
			}
			return {
				[action]:Validation[name](params),
				message:FIELD[key][message][domain]
			}
		}
	}
	static min(n){
		return (value) =>{
			if(value.length < n){
				return false
			}
			return true;
		}
	}
	static max(n){
		return (value) =>{
			if(value.length > n){
				return false
			}
			return true;
		}
	}
	static nonContainSpecialChar(){
		return (value) =>{
			return !Validation.containSpecialChar()(value)
		}
	}
	static containSpecialChar(){
		return (value) =>{
			return /[^a-zA-ZáàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ'\-\s\d]/.test(value)
		}
	}
	static notContainNumber(){
		return (value) =>{
			return !Validation.containNumber()(value);
		}
	}
	static containNumber(){
		return (value) =>{
			var regex = /[0-9]/;
			if(!regex.test(value)){
				return false
			}
			return true
		}
	}
	static passwordValid(){
		return (value) =>{
			return (
				Validation.containNumber()(value) &&
				Validation.min(8)(value) &&
				Validation.containSpecialChar()(value) &&
				/[A-Z]/.test(value)
			)
		}
	}
	static notEmpty(){
		return (value) =>{
			return (value !== "" && value !== undefined && value !== null)
		}
	}
	static confirmPassword(password){
		return (value) =>{
			if(value === ""){
				return true;
			}
			return (
				password.value == value
			)
		}
	}
	static emailValid(){
		return (value) =>{
	        var regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	        return regex.test(value);
		}
	}
}

export default Validation;