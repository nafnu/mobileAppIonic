import { Component, Input, OnInit } from '@angular/core';
import { DataService, Event } from '../../services/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-eventdetail',
  templateUrl: './eventdetail.component.html',
  styleUrls: ['./eventdetail.component.scss'],
})
export class EventdetailComponent implements OnInit {
  
  @Input() id: string;
  event: Event = null;
  
  constructor(private dataService: DataService, private route: ActivatedRoute) {
  }

  ngOnInit() {

    this.route.params.subscribe(params => {
    this.id = params['id'];
    this.dataService.getEventById(this.id).subscribe(res => {
      this.event = res;
      console.log(this.event);
    });
  });

  }

}
