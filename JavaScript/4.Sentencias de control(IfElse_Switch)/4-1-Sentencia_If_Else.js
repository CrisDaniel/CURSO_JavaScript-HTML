let año = 1899;

sigloActualp(año)
function sigloActualp(año) {
    if (año >= 2000) {
        console.log("Estamos en el siglo XXI")
    } else if (año < 1999 && año >= 1900) {
        console.log("Siglo XX")
    }   
    else {
        console.log("Siglo lejano")
    }
}

