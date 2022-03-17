// let nom1= prompt('entrez votre nom');
// let age1= prompt('entrez votre age');
// let nom2= prompt('entrez votre nom');
// let age2= prompt('entrez votre age');
//function difference (age1,age2){
    //return Math.abs(age1 - age2);
//}
// document.write('<strong>'  +  nom1  + '</strong>' + " et " + '<strong>' + nom2 + '</strong>' +' ' + "ont " + difference (age1,age2) +' ' +"années de difference."
// );
//****************************************************************
// let age = prompt('votre age ');
// let m = 18

// if ( age>=18){

//     document.write("Bienvenue sur notre site au contenu douteux");
// }else {
    // function difference(m,age){
    //     return Math.abs(m - age);
    // }
//     let dif=(m - age);
//    document.write(": Désolé, va faire un tour sur gulli.fr et repasse dans" + ' '+ dif + ' ' + "année(s)") ;
// }
//***********************************************************

// let nbr = prompt('saisissez un nombre ');
// let i = 1
// while (  i <= nbr ) {
//      console.log(i);
//      i++;
    
// } 
// ********************************************************    
// let nbr = prompt('saisissez un nombre');
// if(nbr<=20){
// for (let i = 1; i <= nbr ; i++) {
//     console.log(i);    

// }
// }
//  if (nbr>20) {
//     for (let i = 1; i <= 20 ; i++) {
//         console.log(i);  
//     }
//     console.log("« j'en ai marre de compter »");  

// } 
//*****************************************************************

// let tab=[];
// for (let i = 0; i < 10; i++) {

    
//     tab.push(Math.round(Math.random()* 100));
// }       


//  function getRandomArbitrary(min,max){
//      return Math.round(Math.random()*(max - min) + min);
//  }

// console.log(getRandomArbitrary(0,101));

// for (let i = 0; i < tab.length; i++) {
    
//     console.log(tab [i]);
    
// }
// *********************************************************************
 
// let tab = [];
// let nbr;
// let sum = 0

// while (true) {
//     nbr = prompt('entrez un entier');
   
    
//     if(nbr==null){
//         break;
//     }
//    if (nbr>=0) {
       
//        tab.push(nbr);
//    }
    
// }
//  for (let i = 0; i < tab.length; i++) {
//    sum = sum + parseInt(tab[i]);
//  }
//  console.log(sum);
//   function calc(nbr,sum){
 
//  sum = sum + parseInt(nbr);
//   console.log(calc);

//  }
// calc();
//******************************************************************







//***********************************************************************

let paragraphe = document.querySelectorAll('p');


 for (let i = 0; i < paragraphe.length; i++) {
    
    
      console.log(paragraphe[i].innerText);
    }




