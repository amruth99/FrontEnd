import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetAllSkillComponent } from './components/get-all-skill/get-all-skill.component';
import { SkillSaveComponent } from './components/skill-save/skill-save.component';

const routes: Routes = [
  {path:'add',component:SkillSaveComponent},
  {path:'view',component:GetAllSkillComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
