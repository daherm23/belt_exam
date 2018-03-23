import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
    selector: 'app-details',
    templateUrl: './details.component.html',
    styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
    petDeets;
    likedPet;

    constructor(
        private _httpService: HttpService,
        private _route: ActivatedRoute,
        private _router: Router
    ) {
        // this.likedPet = false;
    }

    ngOnInit() {
        this._route.params.subscribe((params: Params) => {
            this.getPetFromService(params['id']);
        });
    }

    getPetFromService(id) {
        let observable = this._httpService.getPet(id);
        observable.subscribe(data => {
            if (data['errorMsg']) {
                this._router.navigate([`/`]);
            }
            this.petDeets = data['pet'];
        });
    }

    likePetFromService() {
        let observable = this._httpService.petLiked(this.petDeets);
        observable.subscribe(data => {
            // this.likedPet = true;
            this.getPetFromService(data['pet']);
        });
    }

    adoptPetFromService() {
        let observable = this._httpService.adoptPet(this.petDeets);
        observable.subscribe(data => {
            this.goHome()
        });
    }
    goHome() { 
        this._router.navigate([`/`]);
    }

}