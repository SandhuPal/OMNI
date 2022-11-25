import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencyMaskDirective } from '../../directive/currency-mask.directive';

@NgModule({
  declarations: [CurrencyMaskDirective],
  exports: [
    CurrencyMaskDirective
  ],
  imports: [
    CommonModule
  ]
})
export class MortgageCalculatorModule { }
