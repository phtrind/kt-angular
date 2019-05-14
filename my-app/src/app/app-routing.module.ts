// angular-components
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// my-components
import { IntroComponent } from './components/intro/intro.component';
import { ConceptsComponent } from './components/concepts/concepts.component';
import { ProsComponent } from './components/pros/pros.component';
import { UtilComponent } from './components/util/util.component';
import { AuthGuardService } from './services/auth-guard.service';

// my-routes
const routes: Routes = [
  { path: 'intro', component: IntroComponent },
  { path: 'concepts', component: ConceptsComponent, canActivate: [AuthGuardService] },
  { path: 'pros', component: ProsComponent, canActivate: [AuthGuardService] },
  { path: 'util', component: UtilComponent, canActivate: [AuthGuardService] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
