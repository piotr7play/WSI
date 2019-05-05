import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Sign } from '../models/sign';

@Component({
  selector: 'app-read-symbols-component',
  templateUrl: './read_symbols.component.html',
  styleUrls: ['./read_symbols.component.scss']
})
export class ReadSymbolsComponent implements OnInit {
    public items : Sign[] = [];

    constructor(
        private dataService: DataService
    ) {}

    ngOnInit() {
        this.dataService.getAssigning().subscribe((data: Sign[]) => {
            this.items = data;
        });
    }
}
