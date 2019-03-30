import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
import { Sign } from '../models/sign';

@Component({
  selector: 'app-assigning-component',
  templateUrl: './assigning.component.html',
  styleUrls: ['./assigning.component.css']
})
export class AssigningComponent {
    //should be moved to server
    public items : Sign[] = [
        {
            source: "https://upload.wikimedia.org/wikipedia/commons/4/46/Phaistos_glyph_01.svg",
            name: "PEDESTRIAN",
            label: ""
        },
        {
            source: "https://upload.wikimedia.org/wikipedia/commons/8/81/Phaistos_glyph_02.svg",
            name: "	PLUMED HEAD",
            label: ""
        },
        {
            source: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Phaistos_glyph_03.svg",
            name: "	TATTOOED HEAD",
            label: ""
        }
    ];

    constructor(
        private dataService: DataService
    ) {}

    save() {
        console.log(this.items);
        //here we should call data service to save data
    }
}
