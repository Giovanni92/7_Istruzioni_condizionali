//Istruzione condizionale IF

if (3>2) {
    console.log("E' vero");
  } else{
     console.log("Non E' vero");
   
  }
   
 var voto =prompt('Inserire il  tuo voto');
   voto = parseInt(voto);
 
    if(isNaN(voto)){
      alert('Non hai inserito un valore numerico');
    }
 
  else if(voto>0 && voto <5){
     alert('Votro troppo basso: bocciato!');
   }
 
 else if(voto>5 && voto<=8){
    alert('Un voto non male!');
 }
    else if(voto>8 && voto <=10){
      alert('Eccelente');
    }
   else {
     alert('Valore non valido');
   }
 