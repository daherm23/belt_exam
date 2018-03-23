import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {

    constructor(private _http: HttpClient) { }

    create(newPet) {
        console.log('Creating a pet!');
        return this._http.post('/addPet', newPet);
    }

    getPets(){
        console.log('Retreiving the pets!');
        return this._http.get('/allPets');
    }

    getPet(id) {
        console.log('getting a single pet!', id);
        return this._http.post('/onePet', {_id: id});
    }

    petLiked(pet) {
        console.log('someone is liking this pet!', pet);
        return this._http.post('/petLiked', pet);
    }

    edit(editPet) {
        console.log('Editing pet deets!');
        return this._http.post('/updatePet', editPet);
    }

    adoptPet(pet) {
        console.log('This pet has been adopted!');
        return this._http.post('/deletePet', pet);
    }
}