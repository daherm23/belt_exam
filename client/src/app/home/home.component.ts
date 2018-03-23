import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    allPets;
    constructor(private _httpService: HttpService) {
        this.allPets = [];
    }

    ngOnInit() {
        this.getPetsFromService();
    }

    getPetsFromService() {
        let observable = this._httpService.getPets();
        observable.subscribe(data => {
            console.log('pets', data);
            this.allPets = data['pets'];
        });
    }
}