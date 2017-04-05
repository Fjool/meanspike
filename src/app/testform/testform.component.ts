import { Component, OnInit    } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

@Component({
  selector: 'app-testform',
  templateUrl: './testform.component.html',
  styleUrls: ['./testform.component.css']
})

export class TestformComponent implements OnInit {

  constructor(public http: Http) { }

  ngOnInit() {
  }
  
  onSubmit() {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post('/quotes', { name }, options)
  }

}
