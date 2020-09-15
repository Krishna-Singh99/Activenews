import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-health',
  templateUrl: './health.page.html',
  styleUrls: ['./health.page.scss'],
})
export class HealthPage implements OnInit {

  public sport: string;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    console.log(this.sport);

    this.loadNews();
  }

  loadNews() {
    const url = 'http://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=6f97e6b6f3994d1880254fb01eec70d0';
    this.http.get(url).subscribe((json: any) => {
       this.sport = json.articles;
       console.log(this.sport);
    });

}
}
