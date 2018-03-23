import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NewComponent } from './new/new.component';
import { DetailsComponent } from './details/details.component';
import { EditComponent } from './edit/edit.component';


const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'new', component: NewComponent },
    { path: 'details/:id', component: DetailsComponent },
    { path: 'edit/:id', component: EditComponent },
    { path: '', pathMatch: 'full', redirectTo: '/' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }