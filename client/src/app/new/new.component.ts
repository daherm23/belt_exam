import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
    selector: 'app-new',
    templateUrl: './new.component.html',
    styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  newPet: any;
  error;

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
    ) {
        this.newPet = {name: '', type: '', description: '', skills: ['', '', ''],};
    }

  ngOnInit() {
    }

  onAdd() {
    console.log('Waiting to add pet!');
    let observable = this._httpService.create(this.newPet);
    observable.subscribe(data => {
        console.log('added', data);
        if (data['error']) {
            console.log("ERROR!!!");
            this.error = 'This pet already exists!!';
        }
        else {
            this.goHome();            
        }
      });
    }
  goHome() {
    this._router.navigate(['/']);
    }
}