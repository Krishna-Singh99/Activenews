import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cate',
  templateUrl: './cate.page.html',
  styleUrls: ['./cate.page.scss'],
})
export class CatePage implements OnInit {
  public cate: string;
public news = [];
  constructor( private http: HttpClient) { }

  ngOnInit() {
 console.log(this.cate);
  }
  loadNews() {
    const url = 'https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=6f97e6b6f3994d1880254fb01eec70d0';
    this.http.get(url).subscribe((json: any) => {
       this.news = json.article;
       console.log(this.news);
    });
  }
}




