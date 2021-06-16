function getRandomNum(lbound, ubound) {
   	return (Math.floor(Math.random() * (ubound - lbound)) + lbound);
   }
   function getRandomChar(number, lower, upper, other, extra, mathematical, umlautecapital, umlautesmall, bracket) {
   	var numberSymbols = "01234567890";
   	var lowerSymbols = "abcdefghijklmnopqrstuvwxyz";
   	var upperSymbols = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
   	var otherSymbols = "!?=)(&%$*+-.,:;";
	
	var mathematicalSymbols = "+-*/?%=";
	var umlautecapitalSymbols = "\|_-/";
	var umlautesmallSymbols = ".,:;";
	var bracketSymbols = "()[]{}><";
	
   	var SymbolsAll = extra;
   	if (number == true)
   		SymbolsAll += numberSymbols;
   	if (lower == true)
   		SymbolsAll += lowerSymbols;
   	if (upper == true)
   		SymbolsAll += upperSymbols;
   	if (other == true)
   		SymbolsAll += otherSymbols;
		
		
		
		
   	return SymbolsAll.charAt(getRandomNum(0, SymbolsAll.length));
   }
   function getPassword() {
   	mylength = document.getElementById('passwordLength').value;
   	myextraChars = document.getElementById('extraChars').value;
   	myfirstNumber = document.getElementById('firstNumber').checked;
   	myfirstLower = document.getElementById('firstLower').checked;
   	myfirstUpper = document.getElementById('firstUpper').checked;
   	myfirstOther = document.getElementById('firstOther').checked;
	
	
	
   	
   
   	var rc = "";
   	if (mylength > 0) {
   		rc += getRandomChar(myfirstNumber, myfirstLower, myfirstUpper, myfirstOther, myextraChars);
   	}
   	for (var idx = 1; idx < mylength; ++idx) {
   		rc += getRandomChar(myfirstNumber, myfirstLower, myfirstUpper, myfirstOther, myextraChars);
   	}
   	document.getElementById('password').value = rc;
   }
      
      
      
      
      
      document.addEventListener("intel.xdk.device.ready",onDeviceReadyHideStatus,false);
function onDeviceReadyHideStatus(evt)
{
intel.xdk.device.hideStatusBar();
}