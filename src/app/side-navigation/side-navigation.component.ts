import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-navigation',
  templateUrl: './side-navigation.component.html',
  styleUrls: ['./side-navigation.component.css']
})
export class SideNavigationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @HostBinding('class.expanded') expanded: boolean = false;

}
