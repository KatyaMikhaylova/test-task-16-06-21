import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'test-task';

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onTabChanged(event): void {
    switch (event.index) {
      case 0:
      case 1:
        this.router.navigate(['/no-content']);
        break;
      case 2:
        this.router.navigate(['/list']);
        break;
    }
  }
}
