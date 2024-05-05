
//1
function sum(arr1,arr2)
{
    let sum=0;
    let sum2=0;
    for (let i = 0; i < arr1.length; i++) {
        sum+=arr1[i];
    }
    for (let i = 0; i < arr2.length; i++) {
        sum2+=arr2[i];
    }
    return sum+sum2;

}

console.log(sum([1,3],[2,3]));


//2
function even(n) 
{
    let arr=[];
    for (let i = 2; i < n+1; i++) 
    {
        if (i % 2 == 0)
        {
            arr.push(i);
        }
    
    }   
    return arr;
}

console.log(even(22));

//3
function printReverse(arr) 
{
    let arr2=[];
    for (let i = arr.length - 1; i >= 0; i--) 
    {
        arr2.push(arr[i]);  
    }
    return arr2;
}

console.log(printReverse([1, 2, 3, 4, 5]));




//4
function sumof(arr,arr2) 
{
    let arr1=[];
    
    for (let index = 0; index < arr.length; index++) 
    {
        arr1.push(arr[index]+arr2[index]); 
    }

    return arr1;
}

console,console.log(sumof([5,6,7],[7,8,9]));

//5
function upper(str)
{
    let str2="";
    for (let i = 0; i < str.length; i++) 
    {
        if((i+1) % 2 == 0)
        {
            str2+="Z";
        }
        else
        str2+=str[i];
        
    }
    return str2;
}

console.log(upper("javascript"));


//6
function checky(str)
{
    for (let i = 0; i < str.length; i++) {
        
        if(str[i] == "y")
        {
            return "yes";
        }
        
    }
    return "no";
}

console.log(checky("salam y"));

//7
function factorial(n) 
{
    if (n === 0 || n === 1) 
    {
        return 1;
    } 
    else 
    {
        let result = 1;
        for (let i = 2; i <= n; i++) 
        {
            result *= i;
        }
        return result;
    }
}


console.log(factorial(5)); 


//8
// const correctPin = "1234";


// const readline = require('readline').createInterface({
//   input: process.stdin,
//   output: process.stdout
// });


// function pin() 
// {
//     let n=4;

//     readline.question('Enter your 4-digit guess: ', (guess) => {
//         if (guess === correctPin) {
//             console.log("That was correct!");
//             readline.close();
//         } else {
//             console.log("Sorry, that was wrong.");
//             attempts--;
//             if (attempts > 0) 
//             {
//                 guessPin();
//             } 
//             else 
//             {
//                 readline.close();
//             }
//         }
//     });
// }

// pin();



//9
function palindrome(str) 
{
    const len = str.length;
    for (let i = 0; i < len / 2; i++) {
        if (str[i] !== str[len - 1 - i]) 
        {
            return false;
        }
    }
    return true;
}

console.log(palindrome("racecar"));



//10
function sumto(num)
{
    let sum=0;
    for (let i = 0; i <num+1; i++) {
        sum+=i;
    }
    return sum;
}

console.log(sumto(8));