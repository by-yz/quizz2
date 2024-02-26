$(document).ready(function () {
    $('#send_quizz1').click(function () {
        var question = {
            'valeur1': $('#question1').val(),
            'valeur2': $("#name1").val(),


        };
        $.ajax({
            url: 'http://127.0.0.1/submit.php',
            type: 'POST',
            dataType: 'json',
            data: question,
            success: function (data) {
                if (data.succes) {
                    //window.location.href = "index.html";
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


$.ajax({
    url: 'http://127.0.0.1/db_connect.php',
    type: 'GET',
    dataType: 'json',
    success: function (data) {
        // Manipulez les données ici (exemple d'affichage dans la console)
        console.log(data);

        // Affichez les données sur la page (exemple d'ajout dans une div)
        var resultDiv = $('#result');
        data.forEach(function (item) {
            resultDiv.append('<p>' + item.column_name + '</p>');
        });
    },
    error: function (error) {
        console.log('Erreur Ajax: ', error);
    }
});