import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-read-words-component',
  templateUrl: './read_words.component.html',
  styleUrls: ['./read_words.component.scss']
})
export class ReadWordsComponent implements OnInit {
    public items : string[] = [];

    constructor(
        private dataService: DataService
    ) {}

    ngOnInit() {
        this.dataService.getAllWords().subscribe((data: string[]) => {
            this.items = data;
        });
    }

    play() {
        this.dataService.getSound(this.items).subscribe(() => {});
    }
}
