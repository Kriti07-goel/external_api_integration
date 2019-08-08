import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  details$ = <any>Object;
  id$ = <any>String;
  constructor(private route : ActivatedRoute , private data : DataService) {
    this.route.params.subscribe(
      params=> this.id$ = params.id
    )
  }

  ngOnInit() {
    this.data.getUser(this.id$).subscribe(
      
      data=> this.details$ = data
      
    );
    console.log(this.details$);
  }
 

  }

