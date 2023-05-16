// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mariam Kasim
// Created on: Mar 2023
// This file contains the JS functions for index.html

"use strict"
/**
 * This function adds up numbers from one to the number entered
 */
function myButtonClicked() {
  // input
  const number = parseInt(document.getElementById("number").value)

  // process
  let answer = 0
  for (let counter = 0; counter < number; counter++) {
    answer += counter
  }
  answer += number

  // output
  document.getElementById("answer").innerHTML =
    "The sum of all numbers between 1 and " + number + " is " + answer + "."
}
