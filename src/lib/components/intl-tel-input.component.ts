/*
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

import { AfterViewInit, Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import intlTelInput from 'intl-tel-input';
import { CountryData, IntlTelInputOptions } from '../model/intl-tel-input-options';

@Component({
    selector: 'intl-tel-input',
    templateUrl: './intl-tel-input.component.html',
    styleUrls: ['./intl-tel-input.component.scss'],
    viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class IntlTelInputComponent implements AfterViewInit {

    @Input() cssClass!: string;
    @Input() E164PhoneNumber!: string | null;
    @Input() label!: string;
    @Input() labelCssClass!: string;
    @Input() name = 'intl-tel-input-name';
    @Input() onlyLocalized!: boolean;
    @Input() options: IntlTelInputOptions = {};
    @Input() required!: boolean;
    @Output() private E164PhoneNumberChange = new EventEmitter<string | null>();
    @ViewChild('intlTelInput') private _inputElement!: ElementRef;
    private _phoneNumber!: string;
    public _intlTelInput: any;

    private static modifyCountryData(): void {
        (window as any).intlTelInputGlobals.getCountryData().forEach((country: CountryData) =>
            country.name = country.name.replace(/.+\((.+)\)/, '$1'));
    }

    ngAfterViewInit(): void {
        if (this.onlyLocalized) {
            IntlTelInputComponent.modifyCountryData();
        }

        const intlTelInputInstance = intlTelInput;
        this._intlTelInput = intlTelInputInstance(this._inputElement.nativeElement, this.options);
    }

    get intlTelInput(): any {
        return this._intlTelInput;
    }

    get phoneNumber(): string {
        return this._phoneNumber;
    }

    set phoneNumber(value: string) {
        if (!!value) {
            this._intlTelInput.setNumber(value);
        }
        this._phoneNumber = value;
        this.i18nizePhoneNumber();
    }

    i18nizePhoneNumber(): void {
        this.E164PhoneNumber = null;
        if (this._intlTelInput.isValidNumberPrecise()) {
            this.E164PhoneNumber = this._intlTelInput.getNumber();
        }
        this.E164PhoneNumberChange.emit(this.E164PhoneNumber);
    }
}
