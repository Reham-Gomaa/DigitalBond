import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnTrans } from './btn-trans';

describe('BtnTrans', () => {
  let component: BtnTrans;
  let fixture: ComponentFixture<BtnTrans>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BtnTrans]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtnTrans);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
