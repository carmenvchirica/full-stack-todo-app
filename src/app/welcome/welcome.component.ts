import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-welcome',
    templateUrl: './welcome.component.html',
    styleUrl: './welcome.component.css',
    standalone: true
})
export class WelcomeComponent implements OnInit {

  name = '';
  message = 'Welcome to our amazing page!';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.name = this.route.snapshot.params['name'];
    console.log( this.name);
  }
}
