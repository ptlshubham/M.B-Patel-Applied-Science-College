import { Routes } from '@angular/router';
import { CampusComponent } from './campus/campus.component';
import { FormComponent } from './form/form.component';
import { PaperComponent } from './paper/paper.component';
import { ResultComponent } from './result/result.component';
import { SearchComponent } from './search/search.component';
import { SyllabusComponent } from './syllabus/syllabus.component';

export const MoreRoutes: Routes = [{
    path: '',
    children: [
        {
            path: 'form',
            component: FormComponent
        },
        {
            path: 'paper',
            component: PaperComponent
        },
        {
            path: 'syllabus',
            component: SyllabusComponent
        },
        {
            path: 'result',
            component: ResultComponent
        },
        {
            path: 'campus',
            component: CampusComponent
        },
        {
            path:'search/:id',
            component:SearchComponent
        }

]
}];