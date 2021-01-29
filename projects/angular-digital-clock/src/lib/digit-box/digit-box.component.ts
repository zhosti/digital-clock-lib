import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-digit-box",
  templateUrl: "./digit-box.component.html",
  styleUrls: ["./digit-box.component.scss"],
})
export class DigitBoxComponent implements OnInit {
  @Input()
  timeUnitName: string;

  @Input()
  timeUnit: any;

  @Input()
  timeFormat: string;

  @Input()
  formatType: string;

  constructor() {}

  ngOnInit(): void {}
}
