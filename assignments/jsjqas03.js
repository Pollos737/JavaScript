//Wilmer Guerra

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
     
     //important: validate value before using parseFloat.
     var miles = $('miles_driven').value;
     var gallons = $('gallons_used').value;
     var pricePerGallon = $('price_gallon').value;
     var mpg = parseFloat(miles / gallons).toFixed(2);
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
     

     //if error found, then nothing, if all good calculate and output results to user
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
     //setting input fields to empty string
     $('miles_driven').value = "";
     $('gallons_used').value = "";
     $('price_gallon').value = "";

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

 };

 window.onload = function() {
     $('btnCalc').onclick = calculate;
     $('btnClear').onclick = clearForm;
 };




