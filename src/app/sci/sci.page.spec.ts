import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SciPage } from './sci.page';

describe('SciPage', () => {
  let component: SciPage;
  let fixture: ComponentFixture<SciPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SciPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SciPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
