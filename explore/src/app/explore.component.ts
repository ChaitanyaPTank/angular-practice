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
    `
})
export class VegitableComponent {
    title = "Vegetables Title";

    getTitle() {
        return "Title:" + this.title;
    }

    vegs = ["Bringle", "Potato", "Ladiesfinger", "Tomato", "Lemon"];
}