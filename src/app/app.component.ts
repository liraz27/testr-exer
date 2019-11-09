import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'Overview';
  currentScreen: string = 'dashboard';
  screens: string[] = ['dashboard', 'message', 'folder', 'chat', 'cog'];

  changeScreen(screen: string) {
    this.currentScreen = screen;
  }

}
