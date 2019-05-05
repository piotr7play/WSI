import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
import { Sign } from '../models/sign';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-assigning-component',
  templateUrl: './assigning.component.html',
  styleUrls: ['./assigning.component.css']
})
export class AssigningComponent {
    public items : Sign[] = [
        {
            id: 1,
            source: "https://upload.wikimedia.org/wikipedia/commons/4/46/Phaistos_glyph_01.svg",
            name: "PEDESTRIAN",
            label: ""
        },
        {
            id: 2,
            source: "https://upload.wikimedia.org/wikipedia/commons/8/81/Phaistos_glyph_02.svg",
            name: "PLUMED HEAD",
            label: ""
        },
        {
            id: 3,
            source: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Phaistos_glyph_03.svg",
            name: "TATTOOED HEAD",
            label: ""
        },
        {
            id: 4,
            source: "https://upload.wikimedia.org/wikipedia/commons/6/6d/Phaistos_glyph_04.svg",
            name: "CAPTIVE",
            label: ""
        },
        {
            id: 5,
            source: "https://upload.wikimedia.org/wikipedia/commons/4/42/Phaistos_glyph_05.svg",
            name: "CHILD",
            label: ""
        },
        {
            id: 6,
            source: "https://upload.wikimedia.org/wikipedia/commons/9/97/Phaistos_glyph_06.svg",
            name: "WOMAN",
            label: ""
        },
        {
            id: 7,
            source: "https://upload.wikimedia.org/wikipedia/commons/a/ad/Phaistos_glyph_07.svg",
            name: "HELMET",
            label: ""
        },
        {
            id: 8,
            source: "https://upload.wikimedia.org/wikipedia/commons/2/2b/Phaistos_glyph_08.svg",
            name: "GAUNTLET",
            label: ""
        },
        {
            id: 9,
            source: "https://upload.wikimedia.org/wikipedia/commons/5/52/Phaistos_glyph_09.svg",
            name: "TIARA",
            label: ""
        },
        {
            id: 10,
            source: "https://upload.wikimedia.org/wikipedia/commons/3/31/Phaistos_glyph_10.svg",
            name: "ARROW",
            label: ""
        },
        {
            id: 11,
            source: "https://upload.wikimedia.org/wikipedia/commons/6/67/Phaistos_glyph_11.svg",
            name: "BOW",
            label: ""
        },
        {
            id: 12,
            source: "https://upload.wikimedia.org/wikipedia/commons/4/46/Phaistos_glyph_12.svg",
            name: "SHIELD",
            label: ""
        },
        {
            id: 13,
            source: "https://upload.wikimedia.org/wikipedia/commons/8/83/Phaistos_glyph_13.svg",
            name: "CLUB",
            label: ""
        },
        {
            id: 14,
            source: "https://upload.wikimedia.org/wikipedia/commons/3/36/Phaistos_glyph_14.svg",
            name: "MANACLES",
            label: ""
        },
        {
            id: 15,
            source: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Phaistos_glyph_15.svg",
            name: "MATTOCK",
            label: ""
        },
        {
            id: 16,
            source: "https://upload.wikimedia.org/wikipedia/commons/c/cc/Phaistos_glyph_16.svg",
            name: "SAW",
            label: ""
        },
        {
            id: 17,
            source: "https://upload.wikimedia.org/wikipedia/commons/d/db/Phaistos_glyph_17.svg",
            name: "LID",
            label: ""
        },
        {
            id: 18,
            source: "https://upload.wikimedia.org/wikipedia/commons/6/64/Phaistos_glyph_18.svg",
            name: "BOOMERANG",
            label: ""
        },
        {
            id: 19,
            source: "https://upload.wikimedia.org/wikipedia/commons/2/20/Phaistos_glyph_19.svg",
            name: "CARPENTRY PLANE",
            label: ""
        },
        {
            id: 20,
            source: "https://upload.wikimedia.org/wikipedia/commons/5/56/Phaistos_glyph_20.svg",
            name: "DOLIUM",
            label: ""
        },
        {
            id: 21,
            source: "https://upload.wikimedia.org/wikipedia/commons/0/01/Phaistos_glyph_21.svg",
            name: "COMB",
            label: ""
        },
        {
            id: 22,
            source: "https://upload.wikimedia.org/wikipedia/commons/f/f1/Phaistos_glyph_22.svg",
            name: "SLING",
            label: ""
        },
        {
            id: 23,
            source: "https://upload.wikimedia.org/wikipedia/commons/7/72/Phaistos_glyph_23.svg",
            name: "COLUMN",
            label: ""
        },
        {
            id: 24,
            source: "https://upload.wikimedia.org/wikipedia/commons/e/e7/Phaistos_glyph_24.svg",
            name: "BEEHIVE",
            label: ""
        },
        {
            id: 25,
            source: "https://upload.wikimedia.org/wikipedia/commons/4/4d/Phaistos_glyph_25.svg",
            name: "SHIP",
            label: ""
        },
        {
            id: 26,
            source: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Phaistos_glyph_26.svg",
            name: "HORN",
            label: ""
        },
        {
            id: 27,
            source: "https://upload.wikimedia.org/wikipedia/commons/c/c1/Phaistos_glyph_27.svg",
            name: "HIDE",
            label: ""
        },
        {
            id: 28,
            source: "https://upload.wikimedia.org/wikipedia/commons/0/00/Phaistos_glyph_28.svg",
            name: "BULLS LEG",
            label: ""
        },
        {
            id: 29,
            source: "https://upload.wikimedia.org/wikipedia/commons/9/96/Phaistos_glyph_29.svg",
            name: "CAT",
            label: ""
        },
        {
            id: 30,
            source: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Phaistos_glyph_30.svg",
            name: "RAM",
            label: ""
        },
        {
            id: 31,
            source: "https://upload.wikimedia.org/wikipedia/commons/2/21/Phaistos_glyph_31.svg",
            name: "EAGLE",
            label: ""
        },
        {
            id: 32,
            source: "https://upload.wikimedia.org/wikipedia/commons/a/a7/Phaistos_glyph_32.svg",
            name: "DOVE",
            label: ""
        },
        {
            id: 33,
            source: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Phaistos_glyph_33.svg",
            name: "TUNNY",
            label: ""
        },
        {
            id: 34,
            source: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Phaistos_glyph_34.svg",
            name: "BEE",
            label: ""
        },
        {
            id: 35,
            source: "https://upload.wikimedia.org/wikipedia/commons/4/48/Phaistos_glyph_35.svg",
            name: "PLANE TREE",
            label: ""
        },
        {
            id: 36,
            source: "https://upload.wikimedia.org/wikipedia/commons/b/bb/Phaistos_glyph_36.svg",
            name: "VINE",
            label: ""
        },
        {
            id: 37,
            source: "https://upload.wikimedia.org/wikipedia/commons/3/30/Phaistos_glyph_37.svg",
            name: "PAPYRUS",
            label: ""
        },
        {
            id: 38,
            source: "https://upload.wikimedia.org/wikipedia/commons/2/22/Phaistos_glyph_38.svg",
            name: "ROSETTE",
            label: ""
        },
        {
            id: 39,
            source: "https://upload.wikimedia.org/wikipedia/commons/f/fe/Phaistos_glyph_39.svg",
            name: "LILY",
            label: ""
        },
        {
            id: 40,
            source: "https://upload.wikimedia.org/wikipedia/commons/8/85/Phaistos_glyph_40.svg",
            name: "OX BACK",
            label: ""
        },
        {
            id: 41,
            source: "https://upload.wikimedia.org/wikipedia/commons/5/58/Phaistos_glyph_41.svg",
            name: "FLUTE",
            label: ""
        },
        {
            id: 42,
            source: "https://upload.wikimedia.org/wikipedia/commons/9/97/Phaistos_glyph_42.svg",
            name: "GRATER",
            label: ""
        },
        {
            id: 43,
            source: "https://upload.wikimedia.org/wikipedia/commons/b/bb/Phaistos_glyph_43.svg",
            name: "STRAINER",
            label: ""
        },
        {
            id: 44,
            source: "https://upload.wikimedia.org/wikipedia/commons/d/db/Phaistos_glyph_44.svg",
            name: "SMALL AXE",
            label: ""
        },
        {
            id: 45,
            source: "https://upload.wikimedia.org/wikipedia/commons/c/c1/Phaistos_glyph_45.svg",
            name: "WAVY BAND",
            label: ""
        }
    ];

    constructor(
        private dataService: DataService,
        private snackBar: MatSnackBar
    ) {}

    save() {
        this.dataService.saveAssigning(this.items).subscribe(() => {
            this.snackBar.open('Zapisano', 'Zamknij', {
                duration: 2000,
            });
        });
    }
}
