import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Archivo } from './archivo';

describe('Archivo', () => {
  let component: Archivo;
  let fixture: ComponentFixture<Archivo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Archivo],
    }).compileComponents();

    fixture = TestBed.createComponent(Archivo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
