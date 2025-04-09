import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.page.html',
  styleUrls: ['./profil.page.scss'],
  standalone: false
})
export class ProfilPage implements OnInit {

  @ViewChild(IonContent) content! : IonContent

  constructor() { }

  ngOnInit() {
  }

  public scrollToBottom(){
    this.content.scrollToBottom(500);
  }

  public scrollToTop(){
    this.content.scrollToTop(1500);
  }

  public startToScroll() : void{
    console.log("Démarrage du scroll!");
  }

  public duringScrolling(event : any) : void{
    if(event) console.log(event);
    else console.log("Weeeeeeee!");
  }
  
  public endOfScroll() : void{
    console.log("Fin du scroll!");
  }

}
