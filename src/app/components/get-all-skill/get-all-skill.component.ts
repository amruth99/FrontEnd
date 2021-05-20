import { Component, AfterViewChecked, ElementRef, ViewChild, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skill } from 'src/app/module/skill';
import { SkillServiceService } from 'src/app/services/skill-service.service';

@Component({
  selector: 'app-get-all-skill',
  templateUrl: './get-all-skill.component.html',
  styleUrls: ['./get-all-skill.component.css']
})
export class GetAllSkillComponent implements OnInit {

  constructor(private skillServe:SkillServiceService, 
    private router:Router) { }

    Id:number;
    sk:Skill;

    editSkill:boolean=false;

  skills:Skill[]=[];
  ngOnInit(): void {
    this.sk=new Skill();
    this.skillServe.getAllSkill().subscribe(data=>
      {
        this.skills=data;
      },
      error=>
      {
        console.log("error occured",error);
      }
    );
  }

  deleteSkill(skl:Skill)
  {
     this.skillServe.deleteSkill(skl).subscribe(data=>
       {
       },
       error=>console.log(error)
       );
       alert("Skill Deleted Successfully");
       window.location.reload();
    }

    editSkills(sk:Skill)
  {
    this.editSkill=true;

    this.sk = sk;
    console.log(this.sk.id+''+this.sk.name);
  }

   updateSkill(skl:Skill)
  {
     this.editSkill=true;
    
  this.skillServe.updateSkill(this.sk).subscribe(data=>
     {
         this.sk;
         console.log(this.sk.id +' '+ this.sk.name +" "+this.sk.description);
          this.editSkill=false;
      },
       error=>
      {
        console.log("error errored ",error); 
      }
    )
    alert("Skill Updated Successfully");
   } 

  }
