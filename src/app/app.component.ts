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

const lightNav = { backgroundColor: '#34ace0', color: 'black' };
const darkNav = { backgroundColor:'#40407a', color: 'white' };
const lightBody = { backgroundColor: '#ced6e0', color: 'black' };
const darkBody = { backgroundColor:'#2f3542', color: 'white' };

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('temaNav', [
      state('light', style(lightNav)),
      state('dark', style(darkNav)),
      transition('light <=> dark', animate(1000)),
    ]),
    trigger('temaBody', [
      state('light', style(lightBody)),
      state('dark', style(darkBody)),
      transition('light <=> dark', animate(1000)),
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

  cambiarTema() {
    this.temaNav = this.temaNav === 'dark' ? 'light' : 'dark';
    this.temaBody = this.temaBody === 'dark' ? 'light' : 'dark';
  }
}
