import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-test-route',
  templateUrl: './test-route.component.html',
  styleUrls: ['./test-route.component.css']
})
export class TestRouteComponent implements OnInit {
  private url:any;
  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
     this.route.url.subscribe(url=> {
        this.url = url;
     });
  }

}
