import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading-spinner',
  templateUrl: './loading-spinner.component.html',
  styleUrls: ['./loading-spinner.component.css']
})
export class LoadingSpinnerComponent  implements OnInit {
  @Input('isTrue') isTrue:boolean = false;

  ngOnInit(): void {
  }

}
