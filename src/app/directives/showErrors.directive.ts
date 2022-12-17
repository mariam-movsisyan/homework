import { Directive, ElementRef, Input, Renderer2 } from "@angular/core";

@Directive({
    selector: '[showErrors]'
})
export class ShowErrorsDirective {
    @Input() isWrong!: boolean;

    constructor(private _elementRef: ElementRef,
        private _renderer2: Renderer2) {
        this._setElementStyles()
    }
    private _setElementStyles(): void {
        this._elementRef.nativeElement.classList.add('error-message');
    }


}