import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    selector:'app-server',
    templateUrl:'./server.component.html',
    styleUrls: ['./server.component.scss']
})
export class ServerComponent{
    public serverName : string = 'Otoman';
    public serverId:number = 34;
    public serverStatus:string = 'offline'

    onUpdateServerName(event : any){
        this.serverName = event.target.value;
        console.log(event.target.value);
    }
}