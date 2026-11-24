import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContractTool } from './contract-tool';

describe('ContractTool', () => {
  let component: ContractTool;
  let fixture: ComponentFixture<ContractTool>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContractTool],
    }).compileComponents();

    fixture = TestBed.createComponent(ContractTool);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
