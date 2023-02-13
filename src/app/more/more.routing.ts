import { Routes } from '@angular/router';
import { AcademicCalendarComponent } from './academic-calendar/academic-calendar.component';
import { CampusComponent } from './campus/campus.component';
import { FormComponent } from './form/form.component';
import { MagazineComponent } from './magazine/magazine.component';
import { NewsComponent } from './news/news.component';
import { PaperComponent } from './paper/paper.component';
import { ResultComponent } from './result/result.component';
import { ScholarshipsComponent } from './scholarships/scholarships.component';
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
        },
        {
            path:'academic-calendar',
            component:AcademicCalendarComponent
        },
        {
            path:'scholarships',
            component:ScholarshipsComponent
        },
        {
            path:'magazine',
            component:MagazineComponent
        },
        {
            path:'news',
            component:NewsComponent
        },
        {
            path:'search',
            component:SearchComponent
        },
        {
            path: 'links/:id',
            component: SyllabusComponent
        },

]
}];