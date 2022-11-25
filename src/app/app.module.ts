import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnalogClocksComponent } from './components/analog-clocks/analog-clocks.component';
import { MortgageCalculatorComponent } from './components/mortgage-calculator/mortgage-calculator.component';
import { CurrencyMaskDirective } from './directive/currency-mask.directive';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    AnalogClocksComponent,
    MortgageCalculatorComponent,
    CurrencyMaskDirective
  ],
  imports: [
    BrowserModule,    
    FormsModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  exports: [
    CurrencyMaskDirective
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
