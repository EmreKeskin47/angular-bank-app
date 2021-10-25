import { Component, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
})
export class SideNavComponent {
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) {}
  isExpanded = false;
  showSubmenu: boolean = false;
  isShowing = true;

  isExpanded1 = false;
  showSubmenu1: boolean = false;
  isShowing1 = true;

  isExpanded2 = false;
  showSubmenu2: boolean = false;
  isShowing2 = true;

  isExpanded3 = false;
  showSubmenu3: boolean = false;
  isShowing3 = true;

  isExpanded4 = false;
  showSubmenu4: boolean = false;
  isShowing4 = true;

  isExpanded5 = false;
  showSubmenu5: boolean = false;
  isShowing5 = true;

  isExpanded6 = false;
  showSubmenu6: boolean = false;
  isShowing6 = true;
}
