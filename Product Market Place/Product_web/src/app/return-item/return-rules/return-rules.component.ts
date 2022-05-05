import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-return-rules',
  templateUrl: './return-rules.component.html',
  styleUrls: ['./return-rules.component.scss']
})
export class ReturnRulesComponent implements OnInit {

  setOfRules: any = [
    { no: 'Rule 1', method: 'Items must be returned', img: '../../../assets/images/icon/rule_1.svg' },
    { no: 'Rule 2', method: 'Items must be unsed and unworn and with the orginial tags still attached', img: '../../../assets/images/icon/rule_2.svg' },
    { no: 'Rule 3', method: 'Items must be in their original packaging which must be in original condition', img: '../../../assets/images/icon/rule_3.svg' },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
