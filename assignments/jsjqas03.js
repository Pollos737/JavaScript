<<<<<<< HEAD
//Wilmer Guerra

=======
 //**********************************************************
    // Step 1: define a function that will be used to
    //         work with the values that are entered,
    //         validate the values, calculate the results,
    //         and display the results
    //
    // NOTE: you may enter all of the code in one function
    //       or you may split the code into as many functions
    //       as you want.
    //**********************************************************
>>>>>>> eff066280ee530c67a586958729ccc982d590e47
 var $ = function(id) {
        return document.getElementById(id);
 };


 var calculate = function() {
     // clearing out previous errors
     if($('miles_driven_error').value !== '')
     {
         $('miles_driven_error').firstChild.nodeValue = '';
     }
     if($('gallons_used_error').value !== '')
     {
         $('gallons_used_error').firstChild.nodeValue = '';
     }
     if($('price_gallon_error').value !== '')
     {
         $('price_gallon_error').firstChild.nodeValue = '';
     }
     
<<<<<<< HEAD
     //important: validate value before using parseFloat.
     var miles = $('miles_driven').value;
     var gallons = $('gallons_used').value;
     var pricePerGallon = $('price_gallon').value;
     var mpg = parseFloat(miles / gallons).toFixed(2);
=======
     //TODO: don't parse userInputs before validation.
     var miles = $('miles_driven').value;
     var gallons = $('gallons_used').value;
     var pricePerGallon = $('price_gallon').value;
     var mpg = parseFloat(miles * gallons).toFixed(2);
>>>>>>> eff066280ee530c67a586958729ccc982d590e47
     var costOfTrip = parseFloat(gallons * pricePerGallon).toFixed(2);

     var errorFound = "n";

     //validating form
     if(isNaN(miles) || miles <= 0  || miles == ""){
        $('miles_driven_error').firstChild.nodeValue =
            "Please enter a valid number greater than 0 for Miles ";
        errorFound = "y";
     }

     if(gallons <= 0 || isNaN(gallons) || gallons ==""){

        $('gallons_used_error').firstChild.nodeValue =
            "Please enter a valid number greater than 0 for Gallons";
         errorFound = 'y';
     }

     if(pricePerGallon <= 0 || isNaN(pricePerGallon) || pricePerGallon == "" ){
         $("price_gallon_error").firstChild.nodeValue =
             "Please enter a valid number greater than 0 for Price per Gallon";
         errorFound = "y";
     }
     

<<<<<<< HEAD
     //if error found, then nothing, if all good calculate and output results to user
=======
     //if error found, then nothing, if all good calculate and output restults to user
>>>>>>> eff066280ee530c67a586958729ccc982d590e47
     if(errorFound == "y"){
         //output "fix your stuff" to user
         $('mpg').firstChild.nodeValue = "Please fix the above errors and re-calculate"
     } else{
         //output results
         $('mpg').firstChild.nodeValue = mpg;
         $('cost').firstChild.nodeValue = costOfTrip;
     }



 };

 var clearForm = function() {
<<<<<<< HEAD
     //setting input fields to empty string
=======
>>>>>>> eff066280ee530c67a586958729ccc982d590e47
     $('miles_driven').value = "";
     $('gallons_used').value = "";
     $('price_gallon').value = "";

<<<<<<< HEAD
     //if statements below check for error messages and clears them
     if($('miles_driven_error').value !== '')
     {
         $('miles_driven_error').firstChild.nodeValue = '';
     }
     if($('gallons_used_error').value !== '')
     {
         $('gallons_used_error').firstChild.nodeValue = '';
     }
     if($('price_gallon_error').value !== '')
     {
         $('price_gallon_error').firstChild.nodeValue = '';
     }

     //checks if anything is written where output goes and clears if not empty
     if($('mpg').firstChild.nodeValue !== ""){
         $('mpg').firstChild.nodeValue = ""
     }
     if($('cost').firstChild.nodeValue !== ""){
         $('cost').firstChild.nodeValue = ""
     }

=======
>>>>>>> eff066280ee530c67a586958729ccc982d590e47
 };

 window.onload = function() {
     $('btnCalc').onclick = calculate;
     $('btnClear').onclick = clearForm;
 };

<<<<<<< HEAD

=======
    //**********************************************************
    // Step 2: retrieve the values from the input type=text
    //         form elements, assign values to variables
    //**********************************************************



    //**********************************************************
    // Step 3: check for valid miles driven
    //         if (not a number OR miles driven < 0),
    //         write an error message to the form
    //         using the miles_driven_error id
    //**********************************************************



    //**********************************************************
    // Step 4: check for valid gallons used
    //         if (not a number OR gallons used < 0),
    //         write an error message to the form
    //         using the gallons_used_error id
    //**********************************************************



    //**********************************************************
    // Step 5: check for valid price per gallons
    //         if (not a number OR price per gallon < 0)
    //         write an error message to the form
    //         using the price_gallons_error id
    //**********************************************************



    //**********************************************************
    // Step 6: perform calculations
    //         if the three factors are valid, calculate
    //         the miles per gallon and the cost of the trip
    //**********************************************************



    //**********************************************************
    // Step 7: write values to the page
    //         write the results of the calculated values from
    //         Step 6 to the page, using the mpg and cost id's.
    //         Include text that identifies the value that
    //         you are writing to the page.
    //**********************************************************



    //**********************************************************
    // Step 8: define a function to clear the page
    //         This function will be invoked when the
    //         "Clear Form" button is clicked.
    //
    //         Clear the values in the text boxes and the
    //         mpg and cost id's that are used to display
    //         the results.
    //**********************************************************



    //**********************************************************
    // Step 9: define an anonymous function for window.onload
    //         This function should assign the event handler
    //         functions for the Calculate and Clear buttons
    //**********************************************************
>>>>>>> eff066280ee530c67a586958729ccc982d590e47


