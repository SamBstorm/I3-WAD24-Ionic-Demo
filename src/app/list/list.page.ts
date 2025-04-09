import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
  standalone: false
})
export class ListPage implements OnInit {

  public students : string[];
  public countries : any[];

  constructor() {

    this.students = [
      'Kahoula','Charifa','Mélusine','Jenny','Marwa','Anaïs','Debby'
    ];

    this.countries = [
      {
        initial : "A",
        countries : [
          "Albanies","Angleterre","Allemagne","Arabie Saoudite"
        ]
      },
      {
        initial : "B",
        countries : [
          "Bielorussie","Belgique","Birmanie","Bolivie"
        ]
      },
      {
        initial : "C",
        countries : [
          "Chili","Chine","Canada","Congo"
        ]
      }
    ]

   }

  ngOnInit() {
  }

}
