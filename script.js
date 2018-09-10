// JQuery Practice
$(() => {

    const list = $('#list');

    list.hide();
    $("#menu").on("click", () => {
        list.slideToggle();
    });

    $('#num').on("click", () => {
        $('#numbers').show();
        $('#letters').hide();
        list.slideToggle();
    })

    $('#let').on("click", () => {
        $('#letters').show();
        $('#numbers').hide();
        list.slideToggle();
    })

});