import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { MatSidenav } from '@angular/material/sidenav';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

const lightNav = { backgroundColor: '#b7b7a4', color: 'black' };
const darkNav = { color: 'white', };
const lightBody = { backgroundColor: '#6e6e68', color: 'black' };
const darkBody = {  color: 'white' };

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('temaNav', [
      state('light', style(lightNav)),
      state('dark', style(darkNav)),
      transition('light <=> dark', animate(500)),
    ]),
    trigger('temaBody', [
      state('light', style(lightBody)),
      state('dark', style(darkBody)),
      transition('light <=> dark', animate(500)),
    ]),
  ],
})
export class AppComponent {
  title = 'portafolio';
  temaNav = 'dark';
  temaBody = 'dark';

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) {}

  selected = 'Inicio';

  cambiarTema() {
    this.temaNav = this.temaNav === 'dark' ? 'light':'dark';
    this.temaBody = this.temaBody === 'dark' ? 'light':'dark';
  }
}
