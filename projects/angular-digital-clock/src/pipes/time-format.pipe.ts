import { Pipe, PipeTransform } from "@angular/core";
import { FormatType } from "../enums/formatType";
import {TimeFormat} from '../enums/timeFormat';

@Pipe({
  name: "timeFormat",
})
export class TimeFormatPipe implements PipeTransform {
  transform(value: any, format, formatType): any {
    if (formatType === FormatType.Hour) {
      return this.formatHour(value, format);
    } else if (formatType === FormatType.Minute) {
      return this.formatMinute(value, format);
    } else {
      return this.formatSeconds(value);
    }
  }

  private formatHour(hour: any, format: any) {

    //Check time format and depend on it set 24 hours or 12 hours format
    hour =
      format === TimeFormat.LeadingZero24Hours ||
      format === TimeFormat.NoLeadingZero24Hours
        ? hour % 24
        : hour % 12;

    //Check time format and value if the value is 0 and the selected format is 12 hours format set 12 o'clock
    hour =
      (format === TimeFormat.LeadingZero12Hours ||
        format === TimeFormat.NoLeadingZero12Hours) &&
      !hour
        ? 12
        : hour;

    // Set 0 infront if leading zero format is selected
    hour =
      (format === TimeFormat.LeadingZero12Hours ||
        format === TimeFormat.LeadingZero24Hours) &&
      hour < 10
        ? "0" + hour
        : hour;

    return hour;
  }

  private formatMinute(minute: any, format: any) {
    return format === TimeFormat.LeadingZeroMinutes && minute < 10
        ? "0" + minute
        : minute.toString();
  }

  private formatSeconds(value: any) {
    return value < 10 ? "0" + value : value.toString();
  }
}
