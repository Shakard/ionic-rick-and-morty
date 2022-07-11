import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.page.html',
  styleUrls: ['./characters-list.page.scss'],
})
export class CharactersListPage implements OnInit {
  characters = [];
  info:any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getCharacters();   
  }

  getCharacters() {
    this.http.get<any>('https://rickandmortyapi.com/api/character').subscribe(res => {
        this.characters = res.results;
        this.info = res.info;
      }
    )
  }

  nextPage(url: string) {
    this.http.get<any>(url).subscribe(res => {
      this.characters = res.results;
      this.info = res.info;
    }
  )
  }
}
