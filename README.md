# intl-tel-input-ng

[![Build Status](https://github.com/mpalourdio/intl-tel-input-ng/workflows/CI/badge.svg?branch=master)](https://github.com/mpalourdio/intl-tel-input-ng/actions)
[![Coverage Status](https://coveralls.io/repos/github/mpalourdio/intl-tel-input-ng/badge.svg?branch=master)](https://coveralls.io/github/mpalourdio/intl-tel-input-ng?branch=master)
[![npm](https://img.shields.io/npm/v/intl-tel-input-ng.svg)](https://www.npmjs.com/package/intl-tel-input-ng)
[![npm](https://img.shields.io/npm/dm/intl-tel-input-ng.svg)](https://www.npmjs.com/package/intl-tel-input-ng)

## Changelog

[Please read the changelog](CHANGELOG.md)

## Contributing

Use the fork, Luke. PR without tests will likely not be merged.

## What is it ?

It's an angular component to easily integrate [intl-tel-input](https://github.com/jackocnr/intl-tel-input).

## Installation

To install this library, run:

```bash
# install intl-tel-input
$ npm install intl-tel-input --save / yarn add intl-tel-input

# install this module
$ npm install intl-tel-input-ng --save / yarn add intl-tel-input-ng
```

- Add `node_modules/intl-tel-input/build/js/utils.js` to the `scripts` section in your `angular.json`.  
- Add `node_modules/intl-tel-input/build/css/intlTelInput.css` to the `styles` section in your `angular.json`.
- Import ``IntlTelInputNgModule.forRoot()`` in your main application module.

## Options
 - `options`: An object wrapping the `intl-tel-input` [options](https://github.com/jackocnr/intl-tel-input#options).
 - `onlyLocalized`: If `true`, displays only localized country data. See [here](https://intl-tel-input.com/node_modules/intl-tel-input/examples/gen/modify-country-data.html).
 - `label`: If specified, will generate a `label` for the input (if the name option is set too).
 - `name`: Sets `name` and `id` attributes for the input. The default value is `intl-tel-input-name`.
 - `cssClass`: The CSS class used to style the input component.
 - `labelCssClass`: The CSS class used to style the label associated to the input.
 - `required`: Sets the `required` && `aria-required` attributes for the input.
 - `[(E164PhoneNumber)]`: Outputs the phone number in E164 format if valid.

See the [intl-tel-input repository](https://github.com/jackocnr/intl-tel-input) for more documentation.

## Example:
**The component must be declared between `<form>` tags !**
 
 ```xml
<form #form="ngForm">
    <intl-tel-input
        [label]="'Please enter your phone number'"
        [name]="'my-name'"
        [cssClass]="'form-control'"
        [labelCssClass]="'col-sm-2 col-form-label'"
        [required]="true"
        [options]="{
            preferredCountries: ['ch'],
            i18n: { ch: 'Suisse' },
            onlyCountries: ['fr', 'ch']
        }"
        [onlyLocalized]="true"
        [(E164PhoneNumber)]="E164PhoneNumber"></intl-tel-input>
</form>     
```
