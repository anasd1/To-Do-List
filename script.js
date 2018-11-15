$(document).ready(
    function() {
        $("#button").click(
            function(event) {
                var add = $("input[name=itemName]").val();
                $('ol').append('<li>' + add + '' + '<button>Delete</button></li>');
            });

        $("input[name=itemName]").keyup(function(event) {
            if (event.keyCode == 13) {
                $("#button").click();
            }
        });


        $(document).on('dblclick', 'li', function() {
            $(this).toggleClass('strike').fadeOut('slow');
        });

        $("input").focus(function() {
            $(this).val('');
        });

        //$('ol').sortable();


    }
);