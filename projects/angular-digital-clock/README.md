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
| hourFormat  | The supported `hourFormat` is `h`,`hh`, `H`, `HH`   | `h`  | `[hourForamt]="HH"`  |
| minuteFormat  | The supported `hourFormat` is `m`,`mm`   | `m`  | `[minuteFormat]="'mm"`  |
