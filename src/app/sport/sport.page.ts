import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sport',
  templateUrl: './sport.page.html',
  styleUrls: ['./sport.page.scss'],
})
export class SportPage implements OnInit {
  public sport: string;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    console.log(this.sport);

    this.loadNews();
  }

  loadNews() {
    const url = 'http://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=6f97e6b6f3994d1880254fb01eec70d0';
    this.http.get(url).subscribe((json: any) => {
       this.sport = json.articles;
       console.log(this.sport);
    });

}
}
