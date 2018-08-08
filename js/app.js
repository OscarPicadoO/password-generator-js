(function() {
    var app = document.getElementById('app');
    var inputCaracteres = document.getElementById('longitud');

    var configuracion = {
        caracteres: parseInt(inputCaracteres.value),
        simbols: true,
        numbers: true,
        capital_letter: true,
        lowercase_letter: true
    }

    var caracteres = {

        numbers: '0 1 2 3 4 5 6 7 8 9',
        simbols: '! @ # $ % ^ & * ( ) - _ = + / * < > ? , . ¿ | { } [ ]',
        capital_letter: 'A B C D E F G H I J K L M N O P Q R S T U V W X Y Z',
        lowercase_letter: 'a b c d e f g h i j k l m n o p q r s t u v w x y z'
    }


    console.log(configuracion.caracteres);
    configuracion.caracteres = configuracion.caracteres + 1;
    console.log(configuracion.caracteres);




    /*

    EVENTOS

    */



    app.addEventListener('submit', function(e) {

        e.preventDefault();

    });

    app.elements.namedItem('btn-mas-uno').addEventListener('click', function() {
        configuracion.caracteres++;
        console.log(configuracion.caracteres);
        inputCaracteres.value = configuracion.caracteres;

    });

    app.elements.namedItem('btn-menos-uno').addEventListener('click', function() {
        if (configuracion.caracteres > 1) {
            configuracion.caracteres--;
            console.log(configuracion.caracteres);
            inputCaracteres.value = configuracion.caracteres;
        } else {

        }

    });


    /*
    FUNCIONES
    */

    function btnToggle(elements) {
        elements.classList.toggle('false');
        elements.childNodes[1].classList.toggle('fa-check');
        elements.childNodes[1].classList.toggle('fa-times');
    }

    app.elements.namedItem('btn-simbols').addEventListener('click', function() {
        btnToggle(this);
        configuracion.simbols = !configuracion.simbols;
        console.log('Estado simbolos = ' + configuracion.simbols);

    });

    app.elements.namedItem('btn-numbers').addEventListener('click', function() {
        btnToggle(this);
        configuracion.numbers = !configuracion.numbers;
        console.log('Estado numeros = ' + configuracion.numbers);
    });

    app.elements.namedItem('btn-capital-letter').addEventListener('click', function() {
        btnToggle(this);
        configuracion.capital_letter = !configuracion.capital_letter;
        console.log('Estado mayusculas = ' + configuracion.capital_letter);
    });




    app.elements.namedItem('btn-generar').addEventListener('click', function() {
        /*alert('Contraseña generada');
         */
        generarPassword();

    });


    function generarPassword() {
        var caracteresUtilizados = '';
        var password = '';

        for (propiedad in configuracion) {
            console.log('Ciclo');
            if (configuracion[propiedad] == true) {
                caracteresUtilizados += caracteres[propiedad] + '   ';

            }
        }
        console.log('Cadena seleccionada :' + caracteresUtilizados);
    }
}())

/*

app.elements.namedItem('btn-simbols').addEventListener('click', function () {
    this.classList.toggle('false');
    this.childNodes[1].classList.toggle('fa-check');
    this.childNodes[1].classList.toggle('fa-times');
});*/