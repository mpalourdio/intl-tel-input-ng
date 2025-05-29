# Changelog

## v0.17.0
- Be Zoneless compatible before angular 20.
 
- ## v0.16.0

- Drop `model()` in favor of `input()`.

## v0.15.0

- Drop `@Input` in favor of `signals`.

## v0.14.0

- `angular 19` migration.

## v0.13.0

- Embrace standalone components and get rid of `NgModule`.

## v0.12.0

- `angular 18` migration.
 
## v0.11.1

- Revert: Use `isValidNumber` vs `isValidNumberPrecise`. See this [issue](https://github.com/mpalourdio/intl-tel-input-ng/issues/50).

## v0.11.0

- `intl-tel-input 19`  support, thanks to [tlebreton](https://github.com/tlebreton).
- BC break: The `onlyLocalized` feature has been removed as it's not needed anymore.

## v0.10.0

- `angular 17` migration.

## v0.9.0

- `intl-tel-input 18` support, thanks to [nabilelmahiri](https://github.com/nabilelmahiri).
 
## v0.8.0

- `angular 16` migration.

## v0.7.0

- `angular 15` migration.
 
## v0.6.0

- `angular 14` migration.

## v0.5.1

- Fix after ng-packagr removal of UMD support.

## v0.5.0

- `angular 13` migration.

## v0.4.0

- `angular 12` migration.
- BC break: The library is not `view-engine`compatible anymore.

## v0.3.0

- `angular 11` migration.

## v0.2.0

- `angular 10` migration.

## v0.1.0

- `angular 9` migration.

## v0.0.7

- `angular 8` migration.

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
