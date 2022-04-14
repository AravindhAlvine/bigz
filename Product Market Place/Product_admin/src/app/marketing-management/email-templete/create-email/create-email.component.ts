import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-email',
  templateUrl: './create-email.component.html',
  styleUrls: ['./create-email.component.scss']
})
export class CreateEmailComponent implements OnInit {

  text1: string = '<div>Well I truly liked reading it. This post procured by you is very practical for good planning. Frederique Mickey Gamali</div>';

  constructor() { }

  ngOnInit(): void {
  }

}
