import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  name: string;
  message: string;
  url:string;
  fullName:string;
  actors:Array<string>;
  selectedActor: string;
  characters:Array<any>;
  selectedCharacter:{};
  canShow:boolean;
  constructor(){
    this.name = 'Angular 11';
    this.message = 'The Angular is MVC Framework';
    this.url = "https://www.webnethelper.com";
    this.fullName = '';
    this.actors = new Array<string>();
    this.actors.push('Sean Connary');
    this.actors.push('George Luznaby');
    this.actors.push('Roger Moorey');
    this.actors.push('Trimothy Dalton');
    this.actors.push('Pierce Brosnon');
    this.actors.push('Danial Craig');
    this.selectedActor = '';
    this.characters =  new Array<any>();
    this.characters.push({id:101, name:'James Bond'});
    this.characters.push({id:102, name:'Indiana Jones'});
    this.characters.push({id:103, name:'Ethan Hunt'});
    this.characters.push({id:104, name:'Jason Bourn'});
    this.characters.push({id:105, name:'Captain America'});
    this.selectedCharacter = {};
    this.canShow = true;
  }

  display():void {
    alert('Button is clicked');
  }
  displayParameter(event:any):void {
    alert(`The Received value from UI element = ${event.target.value}`);
  }
  toggleUI():void {
    if(this.canShow) {
      this.canShow = false;
    } else {
      this.canShow = true;
    }
  }
}
