/*
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

import { NgClass } from '@angular/common';
import { AfterViewInit, Component, ElementRef, input, model, ViewChild } from '@angular/core';
import { ControlContainer, FormsModule, NgForm } from '@angular/forms';
import intlTelInput from 'intl-tel-input';
import { IntlTelInput } from '../model/intl-tel-input';
import { IntlTelInputOptions } from '../model/intl-tel-input-options';

@Component({
    selector: 'intl-tel-input',
    standalone: true,
    templateUrl: './intl-tel-input.component.html',
    styleUrls: ['./intl-tel-input.component.scss'],
    imports: [NgClass, FormsModule],
    viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class IntlTelInputComponent implements AfterViewInit {

    readonly cssClass = input<string>();
    readonly label = input<string>();
    readonly labelCssClass = input<string>();
    readonly name = input<string>('intl-tel-input-name');
    readonly options = input<IntlTelInputOptions>({});
    readonly required = input<boolean>(false);
    readonly E164PhoneNumber = model<string | null>();
    @ViewChild('intlTelInput') private readonly _inputElement!: ElementRef;
    private _phoneNumber!: string;
    private _intlTelInput!: IntlTelInput;

    ngAfterViewInit(): void {
        const intlTelInputInstance = intlTelInput;
        this._intlTelInput = intlTelInputInstance(this._inputElement.nativeElement, this.options());
    }

    get intlTelInput(): IntlTelInput {
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
        this.E164PhoneNumber.set(null);
        if (this._intlTelInput.isValidNumber()) {
            this.E164PhoneNumber.set(this._intlTelInput.getNumber());
        }
    }
}
