import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-time-format-dropdown",
  templateUrl: "./time-format-dropdown.component.html",
  styleUrls: ["./time-format-dropdown.component.scss"],
})
export class TimeFormatDropdownComponent implements OnInit {
  @Input()
  formats: [] = [];

  @Input()
  formatType: string;

  @Input()
  defaultText: string;

  @Output()
  formatSelected: EventEmitter<any> = new EventEmitter<any>();

  selectedFormat: string;

  constructor() {}

  ngOnInit(): void {
    this.selectedFormat = this.defaultText;
  }

  onFormatSelected() {
    this.formatSelected.emit({
      format: this.selectedFormat,
      formatType: this.formatType,
    });
  }
}
