import{getDepositDisplayValue,getDepositRangeValue,calculatePercent,getMounthlyPayment,getDealAmount}from"./calculations.js";import{getFormattedValue,unformatValue}from"./utils/format.js";import{getInitialValues}from"./initialValues.js";import{checkIsEmpty}from"./checkIsEmpty.js";import{handleFormSubmit}from"./handleSubmit.js";import*as masksApply from"./utils/masks.js";const creditForm=document.getElementById("creditForm"),priceDisplay=document.getElementById("priceDisplay"),priceRange=document.getElementById("priceRange"),depositDisplay=document.getElementById("depositDisplay"),depositRange=document.getElementById("depositRange"),creditTimeDisplay=document.getElementById("creditTimeDisplay"),dealAmount=document.getElementById("dealAmount"),monthlyPayment=document.getElementById("monthlyPayment"),form=document.getElementById("creditForm"),submitBtn=document.getElementById("creditFormSubmit");window.addEventListener("DOMContentLoaded",(()=>{getInitialValues(),form.addEventListener("submit",handleFormSubmit),priceDisplay.addEventListener("input",getDepositDisplayValue),priceRange.addEventListener("input",getDepositDisplayValue),depositDisplay.addEventListener("input",getDepositRangeValue),depositRange.addEventListener("input",getDepositDisplayValue),depositRange.addEventListener("input",calculatePercent),creditForm.addEventListener("input",getMounthlyPayment),creditForm.addEventListener("input",getDealAmount),creditForm.addEventListener("input",(()=>priceDisplay.value=getFormattedValue(priceDisplay.value))),creditForm.addEventListener("input",checkIsEmpty)}));