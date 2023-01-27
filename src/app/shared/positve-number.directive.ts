import { Directive, Input } from "@angular/core";
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from "@angular/forms";

@Directive({
    selector: '[appPositiveNumber]',
    providers: [{
        provide: NG_VALIDATORS, 
        useClass: PositiveNumberValidatorDirective,
        multi: true
    }]
})
export class PositiveNumberValidatorDirective implements Validator {

    validate(control: AbstractControl<any, any>): ValidationErrors | null {
        return control.value > 0 ? null : {"positiveNumber": true}
    }
}