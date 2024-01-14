# WorldMapApp
A.  Identify an SVG map of the world you will use to provide the visual interface for this project.

B.  Using either the GeoNames or Worldbank API from the Web Links section, identify each of the following six properties for each country:

●   country name (e.g., Chad)

●   country capital (e.g., N’Djamena)

●   country region (e.g., Sub-Saharan Africa)

●   income level (e.g., low income)

●   two additional country properties of your choice


C.  Assign the map component to the default URL using an Angular routing module.


D.  Create an HTML layout with two columns: one column for the map itself and one column to show the required country information from the API in part B.


E.  Convert the SVG map into an interactive Angular component by connecting all the “path” tags inside the SVG file to mouse event handlers so each path is recognized and transmitted to the parent component hosting the map if a mouse event occurs.


F.  Generate an API service that uses the built-in Angular module HTTP client to make HTTP calls and include the following:

●   one method that accepts a country name as an input parameter that returns additional information gathered from the API for the selected country

●   one method that will trigger the API call when a country is selected and set a local variable that will receive the information about the country for display in the right column of the HTML page

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.18.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
