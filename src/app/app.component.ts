import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'recipe-book';
  selectedView = 'recipes';

  onNavigate(view: string) {
    if(view === this.selectedView) return;
    this.selectedView = view;
  }
}
