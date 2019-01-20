/*
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

/// <reference path="../@types/intl-tel-input/index.d.ts" />
import { AfterViewInit, Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import * as intlTelInput from 'intl-tel-input';
import { IntlTelInputOptions, intlTelInputUtils } from '../model/intl-tel-input-options';
import CountryData = intlTelInputUtils.CountryData;

@Component({
    selector: 'intl-tel-input',
    templateUrl: './intl-tel-input.component.html',
    styleUrls: ['./intl-tel-input.component.scss'],
    viewProviders: [{ provide: ControlContainer, useExisting: NgForm }],
})
export class IntlTelInputComponent implements AfterViewInit {

    @Input() public E164PhoneNumber: string;
    @Input() public label: string;
    @Input() public labelCssClass: string;
    @Input() public name = 'intl-tel-input-name';
    @Input() public required: boolean;
    @Input() public cssClass: string;
    @Input() public onlyLocalized: boolean;
    @Input() public options: IntlTelInputOptions = {};
    @Output() private E164PhoneNumberChange = new EventEmitter<string>();
    @ViewChild('intlTelInput') private _inputElement: any;
    private _phoneNumber: string;
    private _intlTelInput: any;

    private static modifyCountryData(): void {
        (<any>window).intlTelInputGlobals.getCountryData().forEach((country: CountryData) =>
            country.name = country.name.replace(/.+\((.+)\)/, '$1'));
    }

    public ngAfterViewInit(): void {
        const phoneElement = (<ElementRef>this._inputElement).nativeElement;
        const options = this.options;

        if (this.onlyLocalized) {
            IntlTelInputComponent.modifyCountryData();
        }

        const intlTelInputInstance = intlTelInput;
        this._intlTelInput = intlTelInputInstance(phoneElement, options);
    }

    get intlTelInput(): any {
        return this._intlTelInput;
    }

    get phoneNumber(): string {
        return this._phoneNumber;
    }

    set phoneNumber(value: string) {
        this._phoneNumber = value;
        this._intlTelInput.setNumber(value);
        this.i18nizePhoneNumber();
    }

    public i18nizePhoneNumber(): void {
        this.E164PhoneNumber = null;
        if (this._intlTelInput.isValidNumber()) {
            this.E164PhoneNumber = this._intlTelInput.getNumber();
        }
        this.E164PhoneNumberChange.emit(this.E164PhoneNumber);
    }
}
