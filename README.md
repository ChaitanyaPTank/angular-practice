# angular-practice

- This repository reflects my practice work for angular-js.

# Note:
- This is my own understanding on angular, this will be changed with time and my own
progress with angular.

## Notes

- install angular cli
```
npm i -g @angular/cli
```

- Create bioler plate code
```
ng new <app-name-here>
```

- Run angular app
```
ng serve
```

- Generate component with CLI
```
ng g c <component-name-here>
```

- Generate services with angular CLI
```
ng g s <service-name-here>
```

## Building blocks of angular app

- Components
	- encapulates:
		- Data
		- HTML template
		- Logic
- Modules
	- breaks app in small parts for ease of maintainability.
- Templates
	- Dynamic HTML
- Directives
- Services

## Typescript

```
let variable = 1; // type of variable is number only.
variale = "String" // not valid
let a: number; // assigns numbers to a only;
```

# High level architecture
- Angular is basically collection of modules.
- An angular app will have atleast single module "Root Module" also called app-module.
- These modules have components and services which are building blocks of our app.
- Components have two parts:
	1. HTML Templates -> View part.
	2. Class -> Logic that controls the view part of that component
- Services are the class that controls the logic of our app.