$(document).ready(function () {
    $('#send_quizz1').click(function () {
        var question = {
            'valeur1': $('#question1').val(),
            'valeur2': $("#question2").val(),
            'valeur3': $('#question3').val(),
            'valeur4': $("#question4").val(),
            'valeur5': $('#question5').val(),
            'valeur6': $("#question6").val(),
            'valeur7': $('#question7').val(),
            'valeur8': $("#question8").val(),
            'valeur9': $("#question9").val(),
            'valeur10': $('#name').val(),

        };
        $.ajax({
            url: 'http://127.0.0.1/submit.php',
            type: 'POST',
            dataType: 'json',
            data: question,
            success: function (data) {
                if (data.succes) {
                    window.location.href = "index.html";
                    console.log("transfert terminé. Valeurs reçues : " + (data));
                }
                else {
                    console.log("force à toi bg")
                }
            },
            error: function (xhr, status, error) {
            }
        });
    });
});

$(document).ready(function () {
    $('#send_quizz1').click(function () {
        var question = {
            'valeur1': $('#question1').val(),
            'valeur2': $("#question2").val(),
            'valeur3': $('#question3').val(),
            'valeur4': $("#question4").val(),
            'valeur5': $('#question5').val(),
            'valeur6': $("#question6").val(),
            'valeur7': $('#question7').val(),
            'valeur8': $("#question8").val(),
            'valeur9': $('#name').val(),

        };
        $.ajax({
            url: 'http://127.0.0.1/submit.php',
            type: 'GET',
            dataType: 'json',
            success: function (data) {
                // Manipulez les données ici (exemple d'affichage dans la console)
                console.log(data);

                // Affichez les données sur la page (exemple d'ajout dans une div)
                var resultDiv = $('#result');
                data.forEach(function (data) {
                    resultDiv.append('<p>' + data.question + '</p>');
                });
            },
            error: function (error) {
                console.log('Erreur Ajax: ', error);
            }
        })
    });
});
