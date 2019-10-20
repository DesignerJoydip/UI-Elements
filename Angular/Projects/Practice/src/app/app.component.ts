import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-Project';

  arrayElement = [
    { type: 'server', name: 'server 1', content: 'content 1' },
    { type: 'blueprint', name: 'server 2', content: 'content 2' }
  ];

  onserverAdded(serverData: {serverType: string, serverName: string, serverContent: string}) {
    this.arrayElement.push({
      type: serverData.serverType,
      name: serverData.serverName,
      content: serverData.serverContent,
    });
  }
}
