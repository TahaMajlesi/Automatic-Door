$(document).ready(function() {
    $('#corporateDropDown').on('click', function() {
        $('#corporateMenu').toggleClass('hidden');
    });

    $(document).on('click', function(event) {
        if (!$(event.target).closest('#corporateDropDown').length) {
            $('#corporateMenu').addClass('hidden');
        }
    });


    $('#productsDropDown').on('click', function() {
        $('#productsMenu').toggleClass('hidden');
    });

    $(document).on('click', function(event) {
        if (!$(event.target).closest('#productsDropDown').length) {
            $('#productsMenu').addClass('hidden');
        }
    });

    $('#LanguageDropDown').on('click', function() {
        $('#LanguageMenu').toggleClass('hidden');
    });

    $(document).on('click', function(event) {
        if (!$(event.target).closest('#LanguageDropDown').length) {
            $('#LanguageMenu').addClass('hidden');
        }
    });
});