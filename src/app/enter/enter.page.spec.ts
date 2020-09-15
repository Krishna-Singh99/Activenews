import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EnterPage } from './enter.page';

describe('EnterPage', () => {
  let component: EnterPage;
  let fixture: ComponentFixture<EnterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnterPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EnterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
