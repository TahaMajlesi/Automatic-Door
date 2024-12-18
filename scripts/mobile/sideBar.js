$(document).ready(function() {

    // Show the dropdown menu when the button is clicked
    $('#mobileSideBarBtn').click(function(event) {
        event.stopPropagation(); // Prevent click from bubbling to the document
        $('#mobileSideBar').removeClass('-translate-x-full'); // Show the dropdown menu
    });

    // Hide dropdown when clicking anywhere on the document
    $(document).click(function(event) {
        // Check if the clicked target is not the dropdown menu or its button
        if (!$(event.target).closest('#mobileSideBar').length && !$(event.target).is('#mobileSideBarBtn')) {
            $('#mobileSideBar').addClass('-translate-x-full'); // Hide the dropdown menu
        }
    });

    // Prevent dropdown from closing when clicking inside it
    $('#mobileSideBar').click(function(event) {
        event.stopPropagation(); // Prevent click from bubbling to the document
    });



});