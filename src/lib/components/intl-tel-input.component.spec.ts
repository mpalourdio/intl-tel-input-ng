/*
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, NgForm } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { IntlTelInputComponent } from './intl-tel-input.component';

describe('IntlTelInputComponent', () => {
    let component: IntlTelInputComponent;
    let fixture: ComponentFixture<IntlTelInputComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                IntlTelInputComponent,
                FormsModule,
            ],
            providers: [
                NgForm,
            ]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(IntlTelInputComponent);
        component = fixture.componentInstance;
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should convert phone number to E164 format', async () => {
        fixture.componentRef.setInput('options', {
            preferredCountries: ['ch'],
            onlyCountries: ['ch', 'fr']
        });
        await fixture.whenStable();
        component.ngAfterViewInit();

        component.phoneNumber = '0797703808';

        expect(component.E164PhoneNumber()).toBe('+41797703808');
    });

    it('should re-set E164 phone number on countryChange', async () => {
        fixture.componentRef.setInput('options', {
            preferredCountries: ['ch'],
            onlyCountries: ['ch', 'fr']
        });
        await fixture.whenStable();
        component.ngAfterViewInit();

        component.phoneNumber = '0797703808';

        expect(component.E164PhoneNumber()).toBe('+41797703808');

        component.phoneNumber = '0681215656';
        component.intlTelInput.setCountry('fr');

        expect(component.E164PhoneNumber()).toBe('+33681215656');
    });

    it('should add a label tag if label attribute is set', async () => {
        const labelText = 'label text';
        fixture.componentRef.setInput('label', labelText);
        await fixture.whenStable();

        const element = fixture
            .debugElement
            .query(By.css('label'))
            .nativeElement;

        expect(element).not.toBe(null);
        expect(element.textContent).toBe(labelText);
    });

    it('should not add a label by default', () => {
        const element = fixture
            .debugElement
            .query(By.css('label'));

        expect(element).toBeNull();
    });

    it('should not have a css class by default for the label', async () => {
        fixture.componentRef.setInput('label', 'label');
        await fixture.whenStable();

        const element = fixture
            .debugElement
            .query(By.css('label'))
            .nativeElement;

        expect(element.className).toBeFalsy();
    });

    it('should be possible to specify a css class for the label', async () => {
        fixture.componentRef.setInput('label', 'label');
        fixture.componentRef.setInput('labelCssClass', 'labelCssClass');
        await fixture.whenStable();

        const element = fixture
            .debugElement
            .query(By.css('label'))
            .nativeElement;

        expect(element.className).toContain(component.labelCssClass());
    });

    it('should set both required and aria-required if specified', async () => {
        fixture.componentRef.setInput('required', true);

        await fixture.whenStable();

        const element: HTMLElement = fixture
            .debugElement
            .query(By.css('input'))
            .nativeElement;

        expect(element.getAttribute('required')).not.toBeNull();
        expect(element.getAttribute('aria-required')).toBe('true');
    });

    it('should set a default name attribute if not specified', async () => {
        await fixture.whenStable();

        const element: HTMLElement = fixture
            .debugElement
            .query(By.css('input'))
            .nativeElement;

        expect(element.getAttribute('name')).toBe(component.name());
        expect(element.getAttribute('name')).toBe(element.getAttribute('id'));
    });

    it('should set name and id to the same value', async () => {
        fixture.componentRef.setInput('name', 'custom-name');
        await fixture.whenStable();

        const element: HTMLElement = fixture
            .debugElement
            .query(By.css('input'))
            .nativeElement;

        expect(element.getAttribute('name')).toBe(component.name());
        expect(element.getAttribute('name')).toBe(element.getAttribute('id'));
    });

    it('should allow specifying a css class', async () => {
        const cssClass = 'my-css-class';
        fixture.componentRef.setInput('cssClass', cssClass);

        await fixture.whenStable();

        const element: HTMLElement = fixture
            .debugElement
            .query(By.css('input'))
            .nativeElement;

        expect(element.className).toContain(cssClass);
    });

    it('should be possible to set preferredCountries option', async () => {
        fixture.componentRef.setInput('options', {
            countrySearch: false,
            preferredCountries: ['ch'],
            onlyCountries: ['ch']
        });

        await fixture.whenStable();

        component.ngAfterViewInit();

        const element = fixture
            .debugElement
            .query(By.css('#intl-tel-input-name'))
            .nativeElement
            .parentNode
            .querySelector('.iti__preferred');

        expect(element.getAttribute('data-country-code')).toBe(component.options().onlyCountries?.[0]);
    });

    it('should be possible to set i18n option', async () => {
        const localizedCountryName = 'Suisse';
        fixture.componentRef.setInput('options', {
            preferredCountries: ['ch'],
            i18n: { ch: localizedCountryName },
            onlyCountries: ['ch']
        });

        await fixture.whenStable();

        component.ngAfterViewInit();

        const element = fixture
            .debugElement
            .query(By.css('#intl-tel-input-name'))
            .nativeElement
            .parentNode
            .querySelector('.iti__country-name');

        expect(element.innerHTML).toBe(localizedCountryName);
    });
});
