import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/module/skill';
import { SkillServiceService } from 'src/app/services/skill-service.service';

@Component({
  selector: 'app-skill-save',
  templateUrl: './skill-save.component.html',
  styleUrls: ['./skill-save.component.css']
})
export class SkillSaveComponent implements OnInit {

  skl:Skill=new Skill();
  constructor(private skillServe:SkillServiceService) { }

  ngOnInit(): void {
  }

  skillSave()
 {
   this.skillServe.skillSave(this.skl).subscribe(
    data=>
    {
      alert("skill added");
    },
    error=>
    {
        console.log("error occured",error);
    }
  );
  }
}
