import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedesSociComponent } from './redes-soci.component';

describe('RedesSociComponent', () => {
  let component: RedesSociComponent;
  let fixture: ComponentFixture<RedesSociComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RedesSociComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RedesSociComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
