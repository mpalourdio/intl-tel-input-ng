# Changelog

## v0.0.6

- Bump `intl-tel-input` dependency to `^15.0.0`.

## v0.0.5

- Added possibility to customize the label's css class via the `labelCssClass` `@Input()`.

## v0.0.4

- `[attr.required]` has been changed to `[required]`. The built-in [validator](https://angular.io/api/forms/RequiredValidator) was not triggered.

## v0.0.3

- Added an `IntlTelInputOptions` interface (meh) for better IDE support when setting `intl-tel-input` options.  
This is a port of thoses [definitions](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/fda699244c8d6de167e57dd6f5e901e617e5a7b5/types/intl-tel-input/index.d.ts).

## v0.0.2

Pass an `option` object as `Input()` for `intl-tel-input` module, so we don't have to provide multiple `@Input()`.  
Please, refer to the [README](README.md#options) to see the component's options.

## v0.0.1

Draft release.
