import { Routes } from '@angular/router';
import { IndexComponent } from '../app/module/book/index/index.component';
import { CreateComponent } from './module/book/create/create.component';
import { EditComponent } from './module/book/edit/edit.component';


//percorsi in base alle azioni
export const routes: Routes = [
    { path: 'book', redirectTo: 'book/index', pathMatch: 'full' },
    { path: 'book/index', component: IndexComponent, },
    { path: 'book/create', component: CreateComponent },
    { path: 'book/edit/:isbn', component: EditComponent }
];
