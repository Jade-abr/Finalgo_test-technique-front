import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-progress-cercle',
  templateUrl: './progress-cercle.component.html',
  styleUrls: [
    './../../../../css/bootstrap.min.css',
    './progress-cercle.component.scss'
  ]

})
export class ProgressCercleComponent implements OnInit {

  @Input() caption: string;
  @Input() colorBootstrapClass: string;
  @Input() progressbarClass: string;
  @Input() starColor: string;
  @Input() maincercleColor: string;
  @Input() textColor: string;
  constructor() { }

  ngOnInit(): void {
  }

}
