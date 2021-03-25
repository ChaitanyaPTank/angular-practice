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
