import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MyAssessments } from './my-assessments';

describe('MyAssessments', () => {
  let component: MyAssessments;
  let fixture: ComponentFixture<MyAssessments>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyAssessments],
    }).compileComponents();

    fixture = TestBed.createComponent(MyAssessments);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
