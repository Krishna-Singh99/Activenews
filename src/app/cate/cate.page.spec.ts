import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CatePage } from './cate.page';

describe('CatePage', () => {
  let component: CatePage;
  let fixture: ComponentFixture<CatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
