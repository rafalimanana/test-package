import classNames from "classnames";
import ComponentsStyle from "./Components.scss?module";

class Components {
	static getMethods() {
		return {
			$input(field) {
				return (
					<div class="form-group">
						<label class="pw_input">
							{field.label}
							<input
								type={field.type}
								placeholder={field.placeholder}
								name={field.name}
								required={field.required}
								class="pw_input form-control"
								onInput={field.checkValidation.bind(field)}
								onPaste={field.checkRestriction.bind(field)}
								onKeypress={field.checkRestriction.bind(field)}
							/>
						</label>

						<span
							class={classNames(
								"form_feedback_error",
								field.isValid
									? "d-none"
									: "invalid-feedback d-block"
							)}
						>
							{field.errorMessage}
						</span>
					</div>
				);
			},
			$password(field) {
				if (field.switchType === undefined) {
					field.switchType = "text";
				}
				var onClickEye = () => {
					var t = field.switchType;
					field.switchType = field.type;
					field.type = t;
					field.instance.refresh();
				};
				var eye = () => {
					if (field.type == "password") {
						return (
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
								class="feather feather-eye"
							>
								<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
								<circle cx="12" cy="12" r="3"></circle>
							</svg>
						);
					}
					return (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							class="feather feather-eye-off"
						>
							<path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
							<line x1="1" y1="1" x2="23" y2="23"></line>
						</svg>
					);
				};
				return (
					<div class="form-group">
						<label class="pw_input field_pwd">
							{field.label}
							<input
								type={field.type}
								placeholder={field.placeholder}
								name={field.name}
								required={field.required}
								class="pw_input form-control"
								onInput={field.checkValidation.bind(field)}
								onPaste={field.checkRestriction.bind(field)}
								onKeypress={field.checkRestriction.bind(field)}
							/>
							<span class="eye" onClick={onClickEye}>
								{eye()}
							</span>
						</label>

						<span
							class={classNames(
								"form_feedback_error",
								field.isValid
									? "d-none"
									: "invalid-feedback d-block"
							)}
						>
							{field.errorMessage}
						</span>
					</div>
				);
			},
			$button(button) {
				return (
					<div class="form-group">
						<button 
							class="btn btn-primary"
							onClick={button.handleValidation.bind(button)}
						>
							{button.text}
						</button>
					</div>
				)
			},
		};
	}
}

export default Components;
