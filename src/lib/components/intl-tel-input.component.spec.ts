/*
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, NgForm } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { IntlTelInputComponent } from './intl-tel-input.component';

describe('IntlTelInputComponent', () => {
    let component: IntlTelInputComponent;
    let fixture: ComponentFixture<IntlTelInputComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                IntlTelInputComponent,
            ],
            imports: [
                FormsModule,
            ],
            providers: [
                NgForm,
            ],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(IntlTelInputComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should convert phone number to E164 format', () => {
        component.options = {
            preferredCountries: ['ch'],
            onlyCountries: ['ch', 'fr']
        };
        component.ngAfterViewInit();

        component.phoneNumber = '0797703808';

        expect(component.E164PhoneNumber).toBe('+41797703808');
    });

    it('should re-set E164 phone number on countryChange', () => {
        component.options = {
            preferredCountries: ['ch'],
            onlyCountries: ['ch', 'fr']
        };
        component.ngAfterViewInit();

        component.phoneNumber = '0797703808';

        expect(component.E164PhoneNumber).toBe('+41797703808');

        component.phoneNumber = '0681215656';
        component.intlTelInput.setCountry('fr');

        expect(component.E164PhoneNumber).toBe('+33681215656');
    });

    it('should add a label tag if label attribute is set', () => {
        const labelText = 'label text';
        component.label = labelText;
        fixture.detectChanges();

        const element = fixture
            .debugElement
            .query(By.css('label'))
            .nativeElement;

        expect(element).not.toBe(null);
        expect(element.innerText).toBe(labelText);
    });

    it('should not add a label by default', () => {
        const element = fixture
            .debugElement
            .query(By.css('label'));

        expect(element).toBe(null);
    });

    it('should not have a css class by default for the label', () => {
        component.label = 'label';
        fixture.detectChanges();

        const element = fixture
            .debugElement
            .query(By.css('label'))
            .nativeElement;

        expect(element.className).toBeFalsy();
    });

    it('should be possible to specify a css class for the label', () => {
        component.label = 'label';
        component.labelCssClass = 'label-css-class';
        fixture.detectChanges();

        const element = fixture
            .debugElement
            .query(By.css('label'))
            .nativeElement;

        expect(element.className).toContain(component.labelCssClass);
    });

    it('should set both required and aria-required if specified', () => {
        component.required = true;
        fixture.detectChanges();

        const element: HTMLElement = fixture
            .debugElement
            .query(By.css('input'))
            .nativeElement;

        expect(element.getAttribute('required')).not.toBeNull();
        expect(element.getAttribute('aria-required')).toBe('true');
    });

    it('should set a default name attribute if not specified', () => {
        const element: HTMLElement = fixture
            .debugElement
            .query(By.css('input'))
            .nativeElement;

        expect(element.getAttribute('name')).toBe(component.name);
        expect(element.getAttribute('name')).toBe(element.getAttribute('id'));
    });

    it('should set name and id to the same value', () => {
        component.name = 'custom-name';
        fixture.detectChanges();

        const element: HTMLElement = fixture
            .debugElement
            .query(By.css('input'))
            .nativeElement;

        expect(element.getAttribute('name')).toBe(component.name);
        expect(element.getAttribute('name')).toBe(element.getAttribute('id'));
    });

    it('should allow specifying a css class', () => {
        const cssClass = 'my-css-class';
        component.cssClass = cssClass;
        fixture.detectChanges();

        const element: HTMLElement = fixture
            .debugElement
            .query(By.css('input'))
            .nativeElement;

        expect(element.className).toContain(cssClass);
    });

    it('should be possible to set preferredCountries option', () => {
        component.options = {
            preferredCountries: ['ch'],
            onlyCountries: ['ch']
        };
        component.ngAfterViewInit();

        fixture.detectChanges();

        const element = fixture
            .debugElement
            .query(By.css('#intl-tel-input-name'))
            .nativeElement
            .parentNode
            .querySelector('.preferred');

        expect(element.getAttribute('data-country-code')).toBe(component.options['onlyCountries'][0]);
    });

    it('should be possible to set localizedCountries option', () => {
        const localizedCountryName = 'Suisse';
        component.options = {
            preferredCountries: ['ch'],
            localizedCountries: { ch: localizedCountryName },
            onlyCountries: ['ch']
        };
        component.ngAfterViewInit();

        fixture.detectChanges();

        const element = fixture
            .debugElement
            .query(By.css('#intl-tel-input-name'))
            .nativeElement
            .parentNode
            .querySelector('.country-name');

        expect(element.innerHTML).toBe(localizedCountryName);
    });

    it('should be possible to set localizedOnly option', () => {
        // country data is window global, and any modification is persistent between tests....
        // so we choose another country than CH (because used in another spec)

        component.options = {
            preferredCountries: ['se'],
            onlyCountries: ['se']
        };
        component.onlyLocalized = true;
        component.ngAfterViewInit();

        fixture.detectChanges();

        const element = fixture
            .debugElement
            .query(By.css('#intl-tel-input-name'))
            .nativeElement
            .parentNode
            .querySelector('.country-name');

        expect(element.innerHTML).toBe('Sverige');
    });
});
