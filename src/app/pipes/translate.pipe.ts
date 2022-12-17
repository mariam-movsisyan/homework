import { Pipe, PipeTransform } from "@angular/core";
import { LanguageService } from "../services/language.service";

@Pipe({
    name: 'translate',
    pure: false
})
export class TranslatePipe implements PipeTransform {

    constructor(public _languageService: LanguageService) {

    }
    transform(value: any) {
        const translation = this._languageService.getTranslation()
        const keys = value.split('.')
        let translationData = structuredClone(translation)
        keys.forEach((key: string) => {
            translationData = translationData[key]
        });
        return translationData

    }
}