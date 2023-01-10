import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  collapsed = true;
  @Output() selectedViewEvent = new EventEmitter<string>();
  selectedView = "recipes";

  onSelect(view: string)
  {
    if(view === this.selectedView) return;
    this.selectedView = view;
    this.selectedViewEvent.emit(view);
  }
}
