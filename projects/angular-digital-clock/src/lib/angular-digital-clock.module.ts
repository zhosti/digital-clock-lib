import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { TimeFormatPipe } from "../pipes/time-format.pipe";
import { AngularDigitalClockComponent } from "./angular-digital-clock.component";
import { DigitBoxComponent } from "./digit-box/digit-box.component";

@NgModule({
  declarations: [
    AngularDigitalClockComponent,
    DigitBoxComponent,
    TimeFormatPipe,
  ],
  imports: [CommonModule, FormsModule],
  exports: [AngularDigitalClockComponent],
})
export class AngularDigitalClockModule {}
