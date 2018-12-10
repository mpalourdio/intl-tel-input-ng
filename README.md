# intl-tel-input-ng

[![Build Status](https://travis-ci.org/mpalourdio/intl-tel-input-ng.svg?branch=master)](https://travis-ci.org/mpalourdio/intl-tel-input-ng)
[![Coverage Status](https://coveralls.io/repos/github/mpalourdio/intl-tel-input-ng/badge.svg?branch=master)](https://coveralls.io/github/mpalourdio/intl-tel-input-ng?branch=master)
[![npm](https://img.shields.io/npm/v/intl-tel-input-ng.svg)](https://www.npmjs.com/package/intl-tel-input-ng)
[![npm](https://img.shields.io/npm/dm/intl-tel-input-ng.svg)](https://www.npmjs.com/package/intl-tel-input-ng)

## Changelog

[Please read the changelog](CHANGELOG.md)

## Contributing

Use the fork, Luke. PR without tests will likely not be merged.

## Installation

To install this library, run:

```bash
$ npm install intl-tel-input --save / yarn add intl-tel-input
$ npm install intl-tel-input-ng --save / yarn add intl-tel-input-ng
```

- Add `node_modules/intl-tel-input/build/js/utils.js` to the `scripts` section in your `angular.json`.  
- Add `node_modules/intl-tel-input/build/css/intlTelInput.css` to the `styles` section in your `angular.json`.
- Import ``IntlTelInputNgModule.forRoot()`` in your main application module.

## What is it ?

It's an angular component to easily integrate [intl-tel-input](https://github.com/jackocnr/intl-tel-input).

## Options
 - `label`: If provided, will generate a `label` for the input (if the name option is set too).
 - `name`: Sets `name` and `id` attributes for the input.
 - `cssClass`: The CSS class used to style the input component.
 - `required`: Sets the `required` && `aria-required` attributes for the input.
 - `countryCodes`: List of availables country codes to display.
 - `preferredCountries` (array): Sets the preferred countries.
 - `localizedCountries` (object, ie. {}): Sets the localized countries if needed.
 - `[(E164PhoneNumber)]`: Outputs the phone number in E164 format if valid.
 
See the [intl-tel-input repository](https://github.com/jackocnr/intl-tel-input) for documentation.

 ## Example:
 
 ```xml
  <intl-tel-input
        [label]="'Please enter your phone number'"
        [name]="'my-name'"
        [cssClass]="'form-control'"
        [required]="true"
        [countryCodes]="['fr', 'ch']"
        [preferredCountries]="['ch']"
        [localizedCountries]="{ ch: 'Suisse' }"
        [(E164PhoneNumber)]="E164PhoneNumber"></intl-tel-input>
```
