# Angular Digital Clock

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.22.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


# AngularDigitalClockLib

## Getting started

Make `npm i angular-digital-clock` for adding the digital clock lin in your project.

Than import `import { AngularDigitalClockModule } from 'angular-digital-clock';` it in your `app.module.ts` file.

### Add font
For visualization of the correct font you need to import the folowing stylesheet `import "node_modules/angular-digital-clock/src/assets/fonts.scss"`
in `angular.json` file.

Example:
```
"styles": [
    "src/styles.css",
    "node_modules/angular-digital-clock/src/assets/fonts.scss"
],
```

### Uesage
And your ready to use it in your template `<lib-angular-digital-clock></lib-angular-digital-clock>`


| Property  | Description  | Default value   | Example  |
| ------------ | ------------ | ------------ | ------------ |
| hourFormat  | The supported `hourFormat` is `h`,`hh`, `H`, `HH`   | `h`  | `[hourForamt]="'HH'"`  |
| minuteFormat  | The supported `hourFormat` is `m`,`mm`   | `m`  | `[minuteFormat]="'mm'"`  |
