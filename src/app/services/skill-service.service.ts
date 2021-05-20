import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skill } from '../module/skill';

@Injectable({
  providedIn: 'root'
})
export class SkillServiceService {

  constructor(private http :HttpClient) { }

  skillSave(sk:Skill):Observable<any>
  {
    let url = 'http://localhost:8001/SkillApi/SkillSave';
    return this.http.post(url,sk,{responseType:'text'});
  }

  getAllSkill():Observable<any>
  {
    let url='http://localhost:8001/SkillApi/getAllSkill';
    return this.http.get(url);
  }

  deleteSkill(skl:Skill):Observable<any>{
    let url = 'http://localhost:8001/SkillApi/removeSkill';

    return this.http.delete(url + "/"+ skl.id);
  }

  getSkillById(id:number):Observable<any>{
    return this.http.get("http://localhost:8001/SkillApi/getSkillById"+ id)
  }

  updateSkill(skl:Skill):Observable<any>{
    let url = 'http://localhost:8001/SkillApi/updateSkill';

    return this.http.put(url + "/"+ skl.id,skl,{responseType:'json'});
  }
  }
