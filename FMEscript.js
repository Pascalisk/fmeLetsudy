//_____________________ΥΠΟΛΟΓΙΣΜΟΣ ΚΟΣΤΟΥΣ ΑΣΥΓΧΡΟΝΗΣ ΔΙΔΑΣΚΑΛΙΑΣ______________________

function eKostosANAlD1 (a, b, c, d, e, at, bt, ct, dt, et, koAnalog) {

    return (((a * at) + (b * bt) + (c * ct) + (d * dt) + (e * et))  * koAnalog);

}

function eKostosANAlD2 (a, b, c, d, e, at, bt, ct, dt, et, koAnalog) {

    return (((a * at) + (b * bt) + (c * ct) + (d * dt) + (e * et))  * koAnalog);
}

function eKostosANAlD3 (a, b, c, d, e, at, bt, ct, dt, et, koAnalog) {

    return (((a * at) + (b * bt) + (c * ct) + (d * dt) + (e * et)) * koAnalog);
}

function eKostosANAlD4 (a, b, c, d, e, at, bt, ct, dt, et, koAnalog) {

    return (((a * at) + (b * bt) + (c * ct) + (d * dt) + (e * et)) * koAnalog);
}

function eKostosANAlD5 (a, b, c, d, e, at, bt, ct, dt, et, koAnalog) {

    return (((a * at) + (b * bt) + (c * ct) + (d * dt) + (e * et)) * koAnalog);
}

//__________________ΥΠΟΛΟΓΙΣΜΟΣ SINOLOIKOU ΚΟΣΤΟΥΣ ΑΣΥΓΧΡΟΝΗΣ ΔΙΔΑΣΚΑΛΙΑΣ__________

function ASinola (a, b, c, d, e, at, bt, ct, dt, et, koAnalog){

    return (5 * (((a * at) + (b * bt) + (c * ct) + (d * dt) + (e * et)) * koAnalog));

    }

//_______________________ΥΠΟΛΟΓΙΣΜΟΣ ΚΟΣΤΟΥΣ ΑΣΥΓΧΡΟΝΗΣ ΔΙΔΑΣΚΑΛΙΑΣ_________________

function eKostosASIXD1 (as, bs, cs, ds, es, koDigital) {

    return (as + bs + cs + ds + es) * koDigital;
}



//_______________________ΥΠΟΛΟΓΙΣΜΟΣ ΚΟΣΤΟΥΣ ΑΣΥΓΧΡΟΝΗΣ ΔΙΔΑΣΚΑΛΙΑΣ_________________________________________

function newKostos1 (a, b, c, d, e,   at, bt, ct, dt, et,   
                    as, bs, cs, ds, es,  ast, bst, cst, dst, est, 
                    koAnalog, koDigital) {

return  [ (as + bs + cs + ds + es) * koDigital 

        + [((a * at) + (b * bt) + (c * ct) + (d * dt)+(e * et))  - 

          ((as * ast) + (bs * bst) + (cs * cst) + (ds * dst) + (es * est))] * koAnalog];
}

function newKostos2 ( a, b, c, d, e,   at, bt, ct, dt, et,  as, bs, cs, ds, es,ast, bst, cst, dst, est, koAnalog) {

        return [((a * at) + (b * bt) + (c * ct) + (d * dt)+(e * et))  - 

        ((as * ast) + (bs * bst) + (cs * cst) + (ds * dst) + (es * est))] * koAnalog;

        }

function newKostos3 ( a, b, c, d, e,   
                      at, bt, ct, dt, et,  
                      as, bs, cs, ds, es,
                      ast, bst, cst, dst, est, 
                      koAnalog) {

            return [((a * at) + (b * bt) + (c * ct) + (d * dt)+(e * et))  -
    
            ((as * ast) + (bs * bst) + (cs * cst) + (ds * dst) + (es * est))] * koAnalog;
    
            }

function newKostos4 ( a, b, c, d, e,   at, bt, ct, dt, et,  as, bs, cs, ds, es,ast, bst, cst, dst, est, koAnalog) {

                return [((a * at) + (b * bt) + (c * ct) + (d * dt)+(e * et))  - 
        
                ((as * ast) + (bs * bst) + (cs * cst) + (ds * dst) + (es * est))] * koAnalog;
        
                }

function newKostos5 ( a, b, c, d, e,   at, bt, ct, dt, et,  as, bs, cs, ds, es,ast, bst, cst, dst, est, koAnalog) {

                    return [((a * at) + (b * bt) + (c * ct) + (d * dt)+(e * et))  -
            
                    ((as * ast) + (bs * bst) + (cs * cst) + (ds * dst) + (es * est))] * koAnalog;
            
                }


function rADSinola ( a, b, c, d, e,   
                    at, bt, ct, dt, et,  
                    as, bs, cs, ds, es,
                    ast, bst, cst, dst, est, 
                    koAnalog, koDigital) {

    return [ (as + bs + cs + ds + es) * koDigital 

        + [((a * at) + (b * bt) + (c * ct) + (d * dt)+(e * et))  - 

          ((as * ast) + (bs * bst) + (cs * cst) + (ds * dst) + (es * est))] * koAnalog * 5];
        

    }
                    

//_______________________________ΥΠΟΛΟΓΙΣΜΟΣ OFELOS_______________________________//

function ofelos1 (a, b, c, d, e,  
                  at, bt, ct, dt, et,  
                  as, bs, cs, ds, es, 
                  ast, bst, cst, dst, est,
                  koAnalog, koDigital) {

    return  (((a * at) + (b * bt) + (c * ct) + (d * dt) + (e * et))  * koAnalog) -
    [ (as + bs + cs + ds + es) * koDigital 

    + [((a * at) + (b * bt) + (c * ct) + (d * dt)+(e * et))  -

    ((as * ast) + (bs * bst) + (cs * cst) + (ds * dst) + (es * est))] * koAnalog]
   
}         




function ofelos2  ( a, b, c, d, e,   at, bt, ct, dt, et,  as, bs, cs, ds, es,ast, bst, cst, dst, est, koAnalog) {

    return (((a * at) + (b * bt) + (c * ct) + (d * dt) + (e * et))  * koAnalog) -
    
    [((a * at) + (b * bt) + (c * ct) + (d * dt)+(e * et))  -

    ((as * ast) + (bs * bst) + (cs * cst) + (ds * dst) + (es * est))] * koAnalog;
 
}


function ofelos3  ( a, b, c, d, e,   at, bt, ct, dt, et,  as, bs, cs, ds, es,ast, bst, cst, dst, est, koAnalog) {

    return (((a * at) + (b * bt) + (c * ct) + (d * dt) + (e * et))  * koAnalog)-
    
    [((a * at) + (b * bt) + (c * ct) + (d * dt)+(e * et))  - 

    ((as * ast) + (bs * bst) + (cs * cst) + (ds * dst) + (es * est))] * koAnalog;

}

function ofelos4  ( a, b, c, d, e,   at, bt, ct, dt, et,  as, bs, cs, ds, es,ast, bst, cst, dst, est, koAnalog) {

    return (((a * at) + (b * bt) + (c * ct) + (d * dt) + (e * et))  * koAnalog) -
    
    [((a * at) + (b * bt) + (c * ct) + (d * dt)+(e * et))  - 

    ((as * ast) + (bs * bst) + (cs * cst) + (ds * dst) + (es * est))] * koAnalog;

}

function ofelos5  ( a, b, c, d, e,   at, bt, ct, dt, et,  as, bs, cs, ds, es,ast, bst, cst, dst, est, koAnalog) {

    return (((a * at) + (b * bt) + (c * ct) + (d * dt) + (e * et))  * koAnalog)-
    
    [((a * at) + (b * bt) + (c * ct) + (d * dt)+(e * et))  -

    ((as * ast) + (bs * bst) + (cs * cst) + (ds * dst) + (es * est))] * koAnalog;

}
//______________________________ΥΠΟΛΟΓΙΣΜΟΣ SINOLO OFELOS_____________________________//

function ofelosSinola (a, b, c, d, e,   at, bt, ct, dt, et,  as, bs, cs, ds, es,ast, bst, cst, dst, est, koAnalog, koDigital) {

let fest = ofelos1 (a, b, c, d, e,   at, bt, ct, dt, et,  as, bs, cs, ds, es,ast, bst, cst, dst, est, koAnalog, koDigital)
let rest = ofelos2 (a, b, c, d, e,   at, bt, ct, dt, et,  as, bs, cs, ds, es,ast, bst, cst, dst, est, koAnalog);

return  ((rest * 4) + fest); 

}
function ofelos5ESinoL (a, b, c, d, e,   at, bt, ct, dt, et,  as, bs, cs, ds, es,ast, bst, cst, dst, est, koAnalog, koDigital) {

    let fest = ofelos1 (a, b, c, d, e,   at, bt, ct, dt, et,  as, bs, cs, ds, es,ast, bst, cst, dst, est, koAnalog, koDigital)
    let rest = ofelos2 (a, b, c, d, e,   at, bt, ct, dt, et,  as, bs, cs, ds, es,ast, bst, cst, dst, est, koAnalog);
    
    return  ((rest * 4) + fest); 

}
//______________________________________XXXXXXXXXXXXX___________________________________//
//______________________________________XXXXXXXXXXXXX___________________________________//
//______________________________________XXXXXXXXXXXXX___________________________________//

// Function to format a number with separators

function formatNumberWithSeparators(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}

// Function to run when the HTML document is loaded
function displayNumbersWithSeparators() {

    // Get all <span> elements on the page
    const spanElements = document.getElementsByTagName('span');

    // Iterate through each <span> element and format its content

    for (let i = 0; i < spanElements.length; i++) {
        const span = spanElements[i];
        const originalNumber = parseFloat(span.textContent);
        if (!isNaN(originalNumber)) {
            const formattedNumber = formatNumberWithSeparators(originalNumber);
            span.textContent = formattedNumber;
        }
    }
}




    
 

