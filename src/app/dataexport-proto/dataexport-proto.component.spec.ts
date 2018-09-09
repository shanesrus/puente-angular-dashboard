import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataexportProtoComponent } from './dataexport-proto.component';

describe('DataexportProtoComponent', () => {
  let component: DataexportProtoComponent;
  let fixture: ComponentFixture<DataexportProtoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataexportProtoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataexportProtoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
