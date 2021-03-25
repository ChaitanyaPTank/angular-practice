import { Component } from "@angular/core";

@Component({
    selector: "vegetables",
    // template: "<h2> {{ title }} </h2>" // or you can put method
    // template: "<h2>{{ getTitle() }}</h2>" // or you can loop over
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

    buttonClick() {
        console.log(this.time , "Button is clicked!");
        ++this.time;
    }

    vegs = ["Bringle", "Potato", "Ladiesfinger", "Tomato", "Lemon"];
}