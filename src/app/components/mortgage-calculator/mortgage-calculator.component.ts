import { Component, OnInit } from '@angular/core';
import { mortgageForm, amortizationPeriod, amortPeriodMonths, paymentFrequency, terms, prePaymentFrequency } from './mortgage';

@Component({
  selector: 'app-mortgage-calculator',
  templateUrl: './mortgage-calculator.component.html',
  styleUrls: ['./mortgage-calculator.component.scss']
})
export class MortgageCalculatorComponent implements OnInit {

  public mortgage =  new mortgageForm();
  amortPeriods= amortizationPeriod;
  amortPeriodMonths= amortPeriodMonths;
  paymentFrequencies= paymentFrequency;
  terms= terms;
  prePaymentFrequencies= prePaymentFrequency;
  calculationSummary: any;

  numMonthlyPayments: number;
  mortgagePayment: number;
  principal: number;
  interest: number;
  totalPay: number;
  numTermPayments: number;
  termMortgagePayment: number;
  termPrincipal: number;
  termInterest: number;
  termTotalPay: number;
  termBalance: number;
  periodicInterestRates: number;
  paymentFrequency: string;
  amortizationPeriodYr: string;
  termYr: string;
    

  calculate() {
  	this.amortizationPeriodYr = this.mortgage.amortPeriodYr+"-year";

  	this.paymentFrequency = this.mortgage.paymentFreq;
  	let weekMultiplier!: number ;
  	if(this.paymentFrequency=='Monthly (12x per year)'){
  		weekMultiplier = 12;
  	} else if (this.paymentFrequency=='Semi-monthly (24x per year)'||this.paymentFrequency=='Accelerated Bi-weekly'){
  		weekMultiplier = 24;
  	} else if (this.paymentFrequency=='Bi-Weekly (every 2 weeks)'){
  		weekMultiplier = 26;
  	} else if (this.paymentFrequency=='Weekly'){
  		weekMultiplier = 52;
  	} else if (this.paymentFrequency=='Accelerated Weekly'){
  		weekMultiplier = 48;
  	}
    this.mortgage.amortPeriodMth = '60';
  	if(this.mortgage.amortPeriodMth==''||this.mortgage.amortPeriodMth==null){
		   this.numMonthlyPayments = this.mortgage.amortPeriodYr*weekMultiplier;//+parseInt(this.mortgage.amortPeriodMth);
  	} else {
   		this.numMonthlyPayments =  this.mortgage.amortPeriodYr*weekMultiplier;//+parseInt(this.mortgage.amortPeriodMth);
  	}

  	//To calculate Monthly mortgage payment, we need periodic interest rate
  	this.periodicInterestRates = Math.pow(Math.pow(1+((this.mortgage.intRate/100)/2),2),(1/weekMultiplier))-1;
  	this.mortgagePayment = (this.mortgage.mortAmount*this.periodicInterestRates)/(1-Math.pow((1+this.periodicInterestRates),-this.numMonthlyPayments));

  	this.principal = this.mortgage.mortAmount;// - this.mortgage.prepayAmt;
  	this.totalPay = this.mortgagePayment * this.numMonthlyPayments;
  	this.interest = this.totalPay-this.principal;
  	this.termYr = this.mortgage.term+"-year";
  	this.numTermPayments = this.mortgage.term*weekMultiplier;
    
  	this.termMortgagePayment = this.mortgagePayment; // assuming total monthly payments remains the same
  	
    this.termTotalPay = this.termMortgagePayment * this.numTermPayments;
	 
    this.termPrincipal = 11492.50; // Don't have the formula, so hard coded the value
  	this.termInterest = this.termTotalPay - 11492.50; // Don't have the formula, so hard coded the value
  	
    this.termBalance = this.mortgage.mortAmount-this.termPrincipal;
 
  	this.calculationSummary = [
  		{category: 'Number of Payments',
  		term: this.numTermPayments,
  		amortizationPeriod: this.numMonthlyPayments},
  		{category: 'Mortgage Payment',
  		term: this.termMortgagePayment,
  		amortizationPeriod: this.mortgagePayment},
  		{category: 'Prepayment',
  		term: this.mortgage.prepayAmt,
  		amortizationPeriod: this.mortgage.prepayAmt},
  		{category: 'Principal Payments',
  		term: this.termPrincipal,
  		amortizationPeriod: this.principal},
  		{category: 'Interest Payments',
  		term: this.termInterest,
  		amortizationPeriod: this.interest},
  		{category: 'Total Cost',
  		term: this.termTotalPay,
  		amortizationPeriod: this.totalPay}
  	];
  }
  
  ngOnInit() {
  	this.calculate();
  }

}
