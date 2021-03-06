import { Component, Input, OnInit } from "@angular/core";
import { FormatType } from "../enums/formatType";
import { PeriodType } from "../enums/periodType";
import { TimeFormat } from "../enums/timeFormat";

@Component({
  selector: "lib-angular-digital-clock",
  templateUrl: "./angular-digital-clock.component.html",
  styleUrls: ["./angular-digital-clock.component.scss"],
})
export class AngularDigitalClockComponent implements OnInit {
  @Input()
  hourFormat;

  @Input()
  minuteFormat;

  date = new Date();

  public get hour() {
    return this.date.getHours();
  }

  public get minute() {
    return this.date.getMinutes();
  }

  public get second() {
    return this.date.getSeconds();
  }

  constructor() {}

  ngOnInit(): void {
    this.hourFormat = "h";
    this.minuteFormat = "m";
    this.getCurrentDate();
  }

  getCurrentDate() {
    setInterval(() => {
      this.date = new Date();
    }, 1000);
  }

  onFormatSlected(time) {
    time.formatType === FormatType.Hour
      ? (this.hourFormat = time.format)
      : (this.minuteFormat = time.format);
  }

  isTwelveHourFormat() {
    if (
      this.hourFormat === TimeFormat.LeadingZero12Hours ||
      this.hourFormat === TimeFormat.NoLeadingZero12Hours
    ) {
      return this.date.getHours() >= 12 ? PeriodType.PM : PeriodType.AM;
    } else {
      return "";
    }
  }
}
