	// Given a string, swap the case for each of the letters.
	// IbrAHiM --> iBRahIm
	// ToYPRoblEm --> tOyprOBLeM
	function swap(input){
 		 
 		for (i=0;i<input.length ; i++)
		{

			if (input[i]===input[i].toUpperCase())
			{

			  newIP.push(input[i].toLowerCase());

			}
		else{
			  newIP.push(input[i].toUpperCase());
			 }
			 
		}
			 
	}



	//iteration ,, if condition to check if the letter lower or upper to return the invres .. 
	// can deal with the i/p as array //i will need to use :: { .toUpperCase()   // .toLowerCase() } 
	//it returns only the inverse of the first letter
	// tried the counter & another for loop 



// OR :: but we wll return here an array :: 
// function swap(input){
//  		var newIP= []
//  		for (i=0;i<input.length ; i++)
// 		{

// 			if (input[i]===input[i].toUpperCase())
// 			{

// 			  newIP.push(input[i].toLowerCase());

// 			}
// 		if (input[i]===input[i].toUpperCase())			{

// 			  newIP.push(input[i].toUpperCase());
// 			 }
			 
// 		}
// 			return newIP; 
// 	}