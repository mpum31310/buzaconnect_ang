import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WillTool } from './will-tool';

describe('WillTool', () => {
  let component: WillTool;
  let fixture: ComponentFixture<WillTool>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WillTool],
    }).compileComponents();

    fixture = TestBed.createComponent(WillTool);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
