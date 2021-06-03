// Iteration 1: Names and Input
let hacker1 = "Priscila"
console.log (`The driver's name is ${hacker1}`);

let hacker2 = "Giovanna"
console.log (`The navigator's name is ${hacker2}`);


// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
console.log (`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker2.length > hacker1.length) {
console.log (`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else if (hacker2.length === hacker1.length) { 
console.log (`Wow, you both have equally long names, ${hacker1.length} characters!`);
}

// Iteration 3: Loops
//3.1
console.log(hacker1.split('').join(' ').toUpperCase());
//3.2
console.log(hacker2.split('').reverse().join(''));
//3.3
let array = [hacker1,hacker2];
array.sort();

for (let i=0; i<1; i++) { 
if (array[0] === hacker1) { 
console.log ("The driver's name goes first.");
} else if (array[0] === hacker2) {
console.log ("Yo, the navigator goes first definitely.");
} else { 
console.log ("What?! You both have the same name?");}
}



//Bonus 1
let str= "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed interdum diam. Nam eu nunc massa. Mauris id tempus lorem, ut dignissim eros. Quisque molestie sollicitudin vehicula. Nullam iaculis nibh et elit malesuada, ac aliquam odio sollicitudin. Vestibulum fermentum, magna feugiat finibus facilisis, ligula lectus cursus lectus, in hendrerit leo nunc quis quam. Donec feugiat nibh aliquam mattis sodales. Integer ut velit mi. Donec et lectus elit. Nam condimentum luctus ipsum, eu viverra diam posuere scelerisque. Nulla cursus vestibulum metus at sagittis. Curabitur efficitur quam metus, nec viverra nulla posuere quis. Praesent sed ligula id risus interdum volutpat. Aliquam a felis vitae sem pellentesque egestas pulvinar eget neque. Aenean id augue vitae arcu bibendum pellentesque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec risus enim, ultricies pretium nulla sit amet, varius finibus nulla. Proin hendrerit sapien magna, sollicitudin efficitur orci tincidunt vitae. Suspendisse vel ante sit amet ligula maximus vehicula et eget tellus. In sit amet luctus dui, vitae fringilla lorem. Duis felis arcu, tincidunt bibendum magna nec, condimentum volutpat dui. In sollicitudin dictum sagittis. Suspendisse consectetur diam leo, a venenatis libero viverra non. Etiam consequat sapien nec nunc condimentum, et convallis ipsum volutpat. Curabitur sollicitudin sapien et arcu accumsan aliquam. Nullam vehicula molestie risus. Donec sagittis massa mauris, et finibus eros efficitur eu. Maecenas eu maximus dui, nec blandit ante. Nulla pulvinar leo dui, nec posuere arcu porttitor et. Maecenas pellentesque eros sapien, sit amet imperdiet est mollis eu. Maecenas finibus magna tellus, sed varius ante porta vel. Donec auctor interdum efficitur. Curabitur vitae nisi vitae mauris volutpat ultrices a ut quam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam vestibulum ullamcorper erat, ac varius ex mollis sed. Maecenas in tellus eget tortor elementum ornare. Duis elit diam, fermentum in congue ut, faucibus quis orci. Nam quis vulputate nunc, non ultricies urna. Etiam aliquet vehicula tempus. Nulla a pulvinar diam, molestie blandit ante. Donec tempor tempus velit, quis tempor eros faucibus et."

let arrayLoren = str.split(" ")
console.log (arrayLoren.length);

let etNumber = str.search("et");
console.log (etNumber);

//Bonus 2
let phraseToCheck = "amor roma";
  function checkPalindrome(str) {
    let l = str.length;
    for (let i = 0; i < l/2; i++) {
      if (str[i] !== str[l - 1 - i]) {
        return false;}
    }
  return true;
  }
checkPalindrome(phraseToCheck);
