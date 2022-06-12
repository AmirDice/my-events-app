import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEventComponent } from './components/add-event/add-event.component';
import { EventFormComponent } from './components/event-form/event-form.component';
import { EventListComponent } from './components/event-list/event-list.component';
import { EventEditComponent } from './components/event-edit/event-edit.component';
import { IndexComponent } from './components/index/index.component';
import { AboutComponent } from './components/about/about.component';

// const routes: Routes = [
//   {
//     path: "",
//     component: IndexComponent,
//   },
//   {
//     path: "events",
//     component: EventListComponent,
//   },
//   {
//     path: "events/new",
//     component: EventFormComponent,
//   },
//   {
//     path: "events/:id",
//     component: AddEventComponent,
//   },
//   {
//     path: "issues/:id/edit",
//     // component: EventEditComponent,
//   },
// ];

const routes: Routes = [
  {
    path: "",
    redirectTo: "",
    pathMatch: "full",
    component: IndexComponent
  },
  {
    path: "events",
    component: EventListComponent,
  },
  {
    path: "events/new",
    component: EventEditComponent,
  },
  {
    path: "events/add",
    component: AddEventComponent,
  },
  {
    path: "events/:id",
    component: AddEventComponent,
      },
    {
    path: "events/:id/edit",
    component: EventEditComponent,
  },
  {
    path: "about",
    component: AboutComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
