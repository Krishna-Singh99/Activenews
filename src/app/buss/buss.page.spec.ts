import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BussPage } from './buss.page';

describe('BussPage', () => {
  let component: BussPage;
  let fixture: ComponentFixture<BussPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BussPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BussPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
