import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-addserver',
  templateUrl: './addserver.component.html',
  styleUrls: ['./addserver.component.css']
})
export class AddserverComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{ serverType: string, serverName: string, serverContent: string }>();
  addnewServerType = '';
  addnewServerName = '';
  addnewServerContent = '';

  constructor() { }

  ngOnInit() {
  }

  onAddServer() {
    this.serverCreated.emit({
      serverType: this.addnewServerType,
      serverName: this.addnewServerName,
      serverContent: this.addnewServerContent
    });
  }

}
