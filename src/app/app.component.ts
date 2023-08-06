import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
} from '@angular/core';
import {
  Router,
  RouteConfigLoadStart,
  RouteConfigLoadEnd,
} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  constructor(private router: Router, private cdr: ChangeDetectorRef) {}
  loadingRouteConfig = true;

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof RouteConfigLoadStart) {
        this.loadingRouteConfig = true;
        this.cdr.detectChanges();
      } else if (event instanceof RouteConfigLoadEnd) {
        this.loadingRouteConfig = false;
        this.cdr.detectChanges();
      }
    });
  }
}
