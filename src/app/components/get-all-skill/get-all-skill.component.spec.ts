import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllSkillComponent } from './get-all-skill.component';

describe('GetAllSkillComponent', () => {
  let component: GetAllSkillComponent;
  let fixture: ComponentFixture<GetAllSkillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetAllSkillComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetAllSkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
