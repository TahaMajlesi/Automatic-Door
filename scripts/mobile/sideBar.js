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