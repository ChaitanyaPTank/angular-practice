# Bindings in angular

- binding gives dynamics to our app.
- proprty of DOM element can be changed by our JS code running in component
class.
- There are several types of binding in Angular
    1. property binding
    - this does binds the property of DOM element with our JS.
    2. Event binding
    - this binds the events with method in component class.
    3. Class, style, Attribute binding
    4. Two-way binding

## Example
```
import { Component } from "@angular/core";

@Component({
    selector: "vegetables",
    template: `
        <h2> {{ title }} </h2>
        <ul>
            <li *ngFor="let vegitable of vegs">
                {{ vegitable }}
            </li>
        </ul>
        <!--Proprty binding-->
        <input [disabled]="isDisabled" type="text" value="Web Refine">
        <!--Event binding-->
        <button (click) = "buttonClick()"> Evend Binding </button>
    `
})
export class VegitableComponent {

    // this property is binded to the disabled attribute in above template
    public isDisabled = true;
    title = "Vegetables Title";
    time = 0;

    getTitle() {
        return "Title:" + this.title;
    }

    // Event click is binded with this method
    buttonClick() {
        console.log(this.time , "Button is clicked!");
        ++this.time;
    }

    vegs = ["Bringle", "Potato", "Ladiesfinger", "Tomato", "Lemon"];
}
```

## Interpolation
- can contain expression
- can contain mehod
- Assignments are not possible in the interpolation.
- Can not access global variables such as windows, screen etc...

## Template reference variables 
- Example:
```
@component ({
    selector: 'selector_name',
    template: `
    <input #myInput type="text"> // #myInput is reference variable
    // (click) is binded to the event
    <button (click) = 'console.log(myInput)'>Button</button>
    `
});
```

## Two way bindings
- __ngModel__ is included in separate module @angular/form, you need to import it first.
```
// name in class will be set to the what user types in text box
<input [(ngModel)]="name" type="text"> 
// that value of name is printed using interpolation to test it
{{ name }}
```
export class TestComponent implements Oninit {
    public name: ''
}

## Structural Directives
- Thease let us add or remove DOM element.
- There  are three built in directives in angular.
    - ngIf
    ```
    <h2 *ngIf="true"> ngIf is true </h2> //*ngIf=false will remove h2 element from DOM
    ```
    - ngSwitch
    ```
    <div [ngSwitch]="name_of_property_you_want_to_switch">
        <h2 *ngSwitchCase="'this'"> property in class is this </h2> 
        <h2 *ngSwitchCase="'that'"> property in class is that </h2> 
        <h2 *ngSwitchCase="'it'"> property in class is it </h2> 
        <h2 *ngSwitchDefault> nothing matches to our cases </h2> 
    </div>
    ```
    - ngFor
    ```
    // colors = ['Red', 'Yellow', 'Saffron', 'Blue']
    // there are other options than the index check it out in docs of angular
    <div *ngFor="let color in colors"; index as i> 
        <h2> {{ i }} {{ color }} </h2>
    </div>
    ```
