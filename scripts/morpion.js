    let tableau1 = []; //On crée les deux tableaux qui détermineront ensuite les conditions de victoires
    let tableau2= [];

    //Escroc method (pas réussi à faire la boucle...)

    let un = document.getElementById('1');
    let deux = document.getElementById('2');
    let trois = document.getElementById('3');

    let quatre = document.getElementById('4');
    let cinq = document.getElementById('5');
    let six = document.getElementById('6');

    let sept = document.getElementById('7');
    let huit = document.getElementById('8');
    let neuf = document.getElementById('9');

    let i = 0;

    let scoreCroix = document.getElementById('scoreCroix');
    let scoreRonds = document.getElementById('scoreRonds');

    let croixPt = 0;
    let rondsPt = 0;


    un.onclick = function (){       // En fonction de la parité de i, on affiche soit rond soit croix.
                                            //Si une case est deja jouée, elle est bloquée.
        if (i%2 == 0 && un.innerHTML==''){
            un.innerHTML = "O";
            tableau1.push('1');
            i++;
        } else if (i%2==1 && un.innerHTML ==''){
            un.innerHTML = "X";
            tableau2.push('1');
            i++;
        }
                            //Appel des trois fonctions qui vont voir SI joueur1, joueur2 gagne ou égalité.
        joueur1();
        joueur2();  
        equal();

    }

    deux.onclick = function (){
            
        if (i%2 == 0 && deux.innerHTML==''){
            deux.innerHTML = "O";
            tableau1.push('2');
            i++;
        } else if (i%2==1 && deux.innerHTML ==''){ 
            deux.innerHTML = "X";
            tableau2.push('2');
            i++;
        }

        console.log(i);

        joueur1();
        joueur2();
        equal();
    }
    trois.onclick = function (){
        
        if (i%2 == 0 && trois.innerHTML==''){
            trois.innerHTML = "O";
            tableau1.push('3');
            i++;
        } else if (i%2==1 && trois.innerHTML =='') {
            trois.innerHTML = "X";
            tableau2.push('3');
            i++;
        }

        joueur1();
        joueur2();
        equal();
    }

    quatre.onclick = function (){
        
        if (i%2 == 0 && quatre.innerHTML==''){
            quatre.innerHTML = "O";
            tableau1.push('4');
            i++;
        } else if (quatre.innerHTML =='') {
            quatre.innerHTML = "X";
            tableau2.push('4');
            i++;
        }

        joueur1();
        joueur2();
        equal();
    }
    cinq.onclick = function (){
        
        if (i%2 == 0 && cinq.innerHTML==''){
            cinq.innerHTML = "O";
            tableau1.push('5');
            i++;
        } else if (cinq.innerHTML =='') {
            cinq.innerHTML = "X";
            tableau2.push('5');
            i++;
        }

        joueur1();
        joueur2();
        equal();
    }
    six.onclick = function (){
        
        if (i%2 == 0 && six.innerHTML==''){
            six.innerHTML = "O";
            tableau1.push('6');
            i++;
        } else if (six.innerHTML =='') {
            six.innerHTML = "X";
            tableau2.push('6');
            i++;
        }

        joueur1();
        joueur2();
        equal();
    }
    sept.onclick = function (){
        
        if (i%2 == 0 && sept.innerHTML==''){
            sept.innerHTML = "O";
            tableau1.push('7');
            i++;
        } else if (sept.innerHTML =='') {
            sept.innerHTML = "X";
            tableau2.push('7');
            i++;
        }

        joueur1();
        joueur2();
        equal();
    }
    huit.onclick = function (){
        
        if (i%2 == 0 && huit.innerHTML==''){
            huit.innerHTML = "O";
            tableau1.push('8');
            i++;
        } else if (huit.innerHTML =='') {
            huit.innerHTML = "X";
            tableau2.push('8');
            i++;
        }

        joueur1();
        joueur2();
        equal();
    }
    neuf.onclick = function (){
        
        if (i%2 == 0 && neuf.innerHTML==''){
            neuf.innerHTML = "O";
            tableau1.push('9');
            i++;
        } else if (neuf.innerHTML =='') {
            neuf.innerHTML = "X";
            tableau2.push('9');
            i++;
        }

        joueur1();   
        joueur2();
        equal();     
    }

    //Fonction qui passe en revue les huit possibilité de victoires.

    function joueur1(){

        
        if (tableau1.indexOf('1')!== -1 && tableau1.indexOf('2') !== -1 && tableau1.indexOf('3') !== -1){

            alert ('Victoire des Ronds!');
            rondsPt++;
            victory ();
    
        } else if (tableau1.indexOf('4')!== -1 && tableau1.indexOf('5') !== -1 && tableau1.indexOf('6') !== -1){

            alert ('Victoire des Ronds!');
            rondsPt++;
            victory ();
        } else if (tableau1.indexOf('7')!== -1 && tableau1.indexOf('8') !== -1 && tableau1.indexOf('9') !== -1){

            alert ('Victoire des Ronds!');
            rondsPt++;
            victory ();
        } else if (tableau1.indexOf('1')!== -1 && tableau1.indexOf('4') !== -1 && tableau1.indexOf('7') !== -1){

            alert ('Victoire des Ronds!');
            rondsPt++;
            victory ();
        } else if (tableau1.indexOf('2')!== -1 && tableau1.indexOf('5') !== -1 && tableau1.indexOf('8') !== -1){

            alert ('Victoire des Ronds!');
            rondsPt++;
            victory ();
        } else if (tableau1.indexOf('3')!== -1 && tableau1.indexOf('6') !== -1 && tableau1.indexOf('9') !== -1){

            alert ('Victoire des Ronds!');
            rondsPt++;
            victory ();
        } else if (tableau1.indexOf('1')!== -1 && tableau1.indexOf('5') !== -1 && tableau1.indexOf('9') !== -1){

            alert ('Victoire des Ronds!');
            rondsPt++;
            victory ();
        } else if (tableau1.indexOf('3')!== -1 && tableau1.indexOf('5') !== -1 && tableau1.indexOf('7') !== -1){

            alert ('Victoire des Ronds!');
            rondsPt++;
            victory ();
        }
    }

    function joueur2(){

        
        if (tableau2.indexOf('1')!== -1 && tableau2.indexOf('2') !== -1 && tableau2.indexOf('3') !== -1){

            alert ('Victoire des Croix!');
            croixPt++;
            victory ();
        } else if (tableau2.indexOf('4')!== -1 && tableau2.indexOf('5') !== -1 && tableau2.indexOf('6') !== -1){

            alert ('Victoire des Croix!');
            croixPt++;
            victory ();
        } else if (tableau2.indexOf('7')!== -1 && tableau2.indexOf('8') !== -1 && tableau2.indexOf('9') !== -1){

            alert ('Victoire des Croix!');
            croixPt++;
            victory ();
        } else if (tableau2.indexOf('1')!== -1 && tableau2.indexOf('4') !== -1 && tableau2.indexOf('7') !== -1){

            alert ('Victoire des Croix!');
            croixPt++;
            victory ();
        } else if (tableau2.indexOf('2')!== -1 && tableau2.indexOf('5') !== -1 && tableau2.indexOf('8') !== -1){

            alert ('Victoire des Croix!');
            croixPt++;
            victory ();
        } else if (tableau2.indexOf('3')!== -1 && tableau2.indexOf('6') !== -1 && tableau2.indexOf('9') !== -1){

            alert ('Victoire des Croix!');
            croixPt++;
            victory ();
        } else if (tableau2.indexOf('1')!== -1 && tableau2.indexOf('5') !== -1 && tableau2.indexOf('9') !== -1){

            alert ('Victoire des Croix!');
            croixPt++;
            victory ();
        } else if (tableau2.indexOf('3')!== -1 && tableau2.indexOf('5') !== -1 && tableau2.indexOf('7') !== -1){

            alert ('Victoire des Croix!');
            croixPt++;
            victory ();
        }
    }

    //Fonction de victoire, lorsqu'appellé, remet à zéro le plan de jeu et met à jour le score.

function victory (){
    un.innerHTML = '';
    deux.innerHTML = '';
    trois.innerHTML = '';
    quatre.innerHTML ='';
    cinq.innerHTML='';
    six.innerHTML='';
    sept.innerHTML='';
    huit.innerHTML='';
    neuf.innerHTML='';

    tableau1 = [];
    tableau2 = [];

    scoreCroix.innerHTML = croixPt;
    scoreRonds.innerHTML = rondsPt;
    
}

function equal (){
    
    if(
        un.innerHTML !== '' &&
        deux.innerHTML !== '' &&
        trois.innerHTML !== '' &&
        quatre.innerHTML !=='' &&
        cinq.innerHTML !==''&&
        six.innerHTML !==''&&
        sept.innerHTML !==''&&
        huit.innerHTML !==''&&
        neuf.innerHTML !==''){

    alert ('Egalité');
    un.innerHTML = '';
    deux.innerHTML = '';
    trois.innerHTML = '';
    quatre.innerHTML ='';
    cinq.innerHTML='';
    six.innerHTML='';
    sept.innerHTML='';
    huit.innerHTML='';
    neuf.innerHTML='';

    tableau1 = [];
    tableau2 = [];

    
    }
}







