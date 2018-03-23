import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
    editPet;
    error;
    constructor(
        private _httpService: HttpService,
        private _route: ActivatedRoute,
        private _router: Router
    ) {}

    ngOnInit() {
        this._route.params.subscribe((params: Params) => {
            this.getPetFromService(params['id']);
        });
    }

    editPetFromService() {
        let observable = this._httpService.edit(this.editPet);
        observable.subscribe(data => {
            console.log('updated', data);
            if (data['err']) {
                this.error = 'Error editing pet!';
            } 
            else {
                this._router.navigate([`/details/${data['pet']}`]);
            }
        });
    }

    getPetFromService(id) {
        let observable = this._httpService.getPet(id);
        observable.subscribe(data => {
            console.log(data);
            if (data['error']) {
                this.goHome();
            }
            this.editPet = data['pet'];
        });
    }
    goHome() { 
        this._router.navigate([`/`]);
    }

}