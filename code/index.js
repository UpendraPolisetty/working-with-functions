// Use default parameter where ever you can

/*
1. 🎖Write a function named calculateDogAge that:
  * [ ] Takes 1 argument: your puppy's age.
  * [ ] Calculates your dog's age based on the conversion rate of 1 human year to 7 dog years.
  * [ ] Return the result dog age in dog year.
  * [ ] Add an additional argument to the function that takes the conversion rate of human to dog years.
*/
// soultion : 
    function calculateDogAge(dogAge,conversion=7){
        return dogAge * conversion;
    }
    calculateDogAge(10) ;// 70

  /*
  2. 🎖Write a function named calculateMoviesToWatch that:
    * [ ] takes 2 arguments: age, number of movies you watch every week. (take 4 weeks per month)
    * [ ] calculates the number of movies for rest of the life (based on a constant max age).
    * [ ] Return the total number of movie you will watch.
  */
    
    // soultion : 
        let calculateMoviesToWatch = (age,numberOfMovies)=> {
            const MAX_AGE = 80;
            return (MAX_AGE-age)*12*4*numberOfMovies;
        }
        calculateMoviesToWatch()
  
  /*
  3. 🎖Create a function called celsiusToFahrenheit:
    * [ ] Accepts celsius temperature as argument.
    * [ ] Convert it to fahrenheit and return "NN°F is NN°C"
  */
  
     function celsiusToFahrenheit(celsiusTemp){
        let fahrenheitTemp =celsiusTemp*1.8+32
        return `${celsiusTemp}°F is  ${fahrenheitTemp}°C`
     }
     celsiusToFahrenheit(  )
  
  /*
  4. 🎖Create a function called fahrenheitToCelsius:
    * [ ] Accepts fahrenheit temperature as argument.
    * [ ] Convert it to celsius and return "NN°F is NN°C"
  */
    function fahrenheitToCelsius(fahrenheitTemp){
          let celsiusTemp =(fahrenheitTemp-32)*5/9;
          return `${fahrenheitTemp}°F is  ${celsiusTemp}°C`
    }
    fahrenheitToCelsius(  )
  
  
  /*
  5. 🎖 Write a function pow(n, x) that returns x in power n.
  
    * [ ] The function accepts two parameter x and n.
    * [ ] Return x times n
    * [ ] If the value of n is below 0 return "The number below 1 is not allowed"
  */
    // solution :
      
     function  pow(x,n) {
        if(n<0){
            return `The number below 1 is not allowed`;
        } else { 
            return x ** n;
            }
     }
     pow()
 
  
  // Test

  
  /*
  6. 🎖Write a program that accepts two parameter a number n and a string with possible values of `sum` or `product`
  and return sum or product of 1,…,n. If user enters any other value than `sum` or `product` alert `Not a valid Input`.
  */

  // solution :
    function sumOrProduct(num,operation){
        if(operation==="sum"){
            let sum=0;
            for(i=0;i<=num;i++){
                sum += i;
            }
            return sum;
        }else if(operation==="product"){
            let product=1;
            for(i=1;i<=num;i++){
                product *= i;
            }
            return product;
    } else{
        alert(`give valid data`)
    }

}
    sumOrProduct()
  

  
  /*
  6. 🎖Write a program that accepts a number n using argument and return the sum of the numbers 1 to n
  */
  
   //solution :
     function sumOfN(num){
        let sum =0;
        for(i=0;i<=num;i++){
            sum += i
        }
        return sum;
     }
     sumOfN()

  
  /*
  7. 🎖Modify the previous program such that only multiples of 5 or 7 are considered in the sum, e.g. n = 20 (5,7,10,14,15,20) 71
  */
  
  // solution : 
     function sumOfValues(num){
        let sum =0;
         for(i=0;i<=num;i++){
              if ( i % 5 == 0 || i % 7 == 0 ){
                sum += i
              }
          }
          return sum;
      }
      sumOfValues()
 
  
  /*
  8. 🎖Write a function `min` that takes two arguments and returns their minimum.
  */
   //  solution :
       function min(num1,num2){
        if (num1>num2){
            return num1;
        } else {
            return num2;
        }
       }
       min()
  
  
  /*
  9. 🎖Write a JavaScript function which accepts an argument and returns the type of the value.
  */
  
     //solution: 
       function valuetype( value ) {
        return typeof( value );
       };
       valuetype();

  