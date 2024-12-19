$(document).ready(function() {

    // Show the dropdown menu when the button is clicked
    $('#mobileSideBarBtn').click(function(event) {
        event.stopPropagation(); // Prevent click from bubbling to the document
        $('#mobileSideBar').removeClass('-translate-x-full'); // Show the dropdown menu
    });

    // close the dropdown menu when the button is clicked
    $('#mobileSideBarClose').click(function(event) {
        event.stopPropagation(); // Prevent click from bubbling to the document
        $('#mobileSideBar').addClass('-translate-x-full'); // Show the dropdown menu
    });


});


$(document).ready(function() {
    $('#menuItem').on('click', function() {
        const $submenu = $('#submenu');
        const isHidden = $submenu.hasClass('hidden');

        // Toggle hidden class
        $submenu.toggleClass('hidden');

        // Animate max-height for smooth transition
        if (isHidden) {
            $submenu.css('max-height', '200px'); // Set this to a value that accommodates your content
            $('#arrow').addClass('rotate-180');
        } else {
            $submenu.css('max-height', '0');
            $('#arrow').removeClass('rotate-180');
        }
    });
});