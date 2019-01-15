/*
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IntlTelInputComponent } from './components/intl-tel-input.component';

@NgModule({
    declarations: [
        IntlTelInputComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
    ],
    exports: [
        IntlTelInputComponent,
    ],
})
export class IntlTelInputNgModule {
    public static forRoot(): ModuleWithProviders {
        return {
            ngModule: IntlTelInputNgModule,
            providers: [],
        };
    }
}
