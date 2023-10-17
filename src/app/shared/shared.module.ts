import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConvertTempPipe } from './pipes/convert-temp.pipe';
import { ToFahrenheitPipe } from './pipes/to-fahrenheit.pipe';
import { ConvertTimePipe } from './pipes/convert-time.pipe';



@NgModule({
  declarations: [
    ConvertTempPipe,
    ToFahrenheitPipe,
    ConvertTimePipe,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ConvertTempPipe,
    ToFahrenheitPipe,
    ConvertTimePipe
  ]
})
export class SharedModule { }
