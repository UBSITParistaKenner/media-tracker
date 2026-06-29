import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchRecord } from './watch-record';

describe('WatchRecord', () => {
  let component: WatchRecord;
  let fixture: ComponentFixture<WatchRecord>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WatchRecord],
    }).compileComponents();

    fixture = TestBed.createComponent(WatchRecord);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
