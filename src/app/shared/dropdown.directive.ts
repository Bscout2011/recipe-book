import { Directive, HostListener, HostBinding, ElementRef } from "@angular/core";

@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective {
    // add a certain CSS class to the element it's clicked on,
    // and remove the class when it's clicked again

    @HostBinding('class.open') isOpen = false;
    @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
        // console.log(this.elRef.nativeElement.contains(event.target));
        this.isOpen = this.elRef.nativeElement.contains(event.target) ?
            !this.isOpen : false;
    }
    constructor(private elRef: ElementRef) {}
}