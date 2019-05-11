$(document).ready(function(){
    var url = $("#video").attr('src');

    $("#miVideo").on('hide.bs.modal', function(){
        $("#video").attr('src', '');
    });

    $("#miVideo").on('show.bs.modal', function(){
        $("#video").attr('src', url);
    });
});