import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ToolKit } from './tool-kit';

describe('ToolKit', () => {
  let component: ToolKit;
  let fixture: ComponentFixture<ToolKit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToolKit],
    }).compileComponents();

    fixture = TestBed.createComponent(ToolKit);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
