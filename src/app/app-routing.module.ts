import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnalogClocksComponent } from './components/analog-clocks/analog-clocks.component';
import { MortgageCalculatorComponent } from './components/mortgage-calculator/mortgage-calculator.component';

const routes: Routes = [  
  { path: '', component: AnalogClocksComponent },
  { path: 'mortgage-calculator', component: MortgageCalculatorComponent },
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
