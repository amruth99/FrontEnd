import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GetAllSkillComponent } from './components/get-all-skill/get-all-skill.component';
import { SkillSaveComponent } from './components/skill-save/skill-save.component';

@NgModule({
  declarations: [
    AppComponent,
    GetAllSkillComponent,
    SkillSaveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
