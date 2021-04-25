import {Component, OnDestroy, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  subs: Subscription[] = [];

  constructor() {
  }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {

  }

  login(form: NgForm): void {

  }

  openRegister(): void {

  }


}
