/*
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

import { IntlTelInputNgModule } from './intl-tel-input-ng.module';

describe('IntlTelInputNgModule', () => {
    let intlTelInputNgModule: IntlTelInputNgModule;

    beforeEach(() => {
        intlTelInputNgModule = new IntlTelInputNgModule();
    });

    it('should create an instance', () => {
        expect(intlTelInputNgModule).toBeTruthy();
    });

    it('should create an instance with providers via forRoot()', () => {
        const intlTelInputNgModuleWithProviders = IntlTelInputNgModule.forRoot();
        expect(intlTelInputNgModuleWithProviders.providers).toBeTruthy();
    });
});
