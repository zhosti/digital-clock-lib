import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { TimeFormatPipe } from "../pipes/time-format.pipe";
import { AngularDigitalClockComponent } from "./angular-digital-clock.component";
import { DigitBoxComponent } from "./digit-box/digit-box.component";
import { TimeFormatDropdownComponent } from "./time-format-dropdown/time-format-dropdown.component";

@NgModule({
  declarations: [
    AngularDigitalClockComponent,
    DigitBoxComponent,
    TimeFormatDropdownComponent,
    TimeFormatPipe,
  ],
  imports: [CommonModule, FormsModule],
  exports: [AngularDigitalClockComponent],
})
export class AngularDigitalClockModule {}
