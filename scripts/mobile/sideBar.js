<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Agradad</title>
    <script src="node_modules/swiper/swiper-bundle.min.js"></script>
    <link rel="stylesheet" href="node_modules/swiper/swiper-bundle.min.css">
    <link rel="stylesheet" href="src/output.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg==" crossorigin="anonymous" referrerpolicy="no-referrer"
    />

</head>

<body>
    <!-- navBar desktop version -->
    <nav class="w-full hidden top-0 sticky lg:flex items-center border-b-[1px] border-black">
        <!-- logo -->
        <div class="w-4/12 items-center ms-4 flex py-1">
            <a href="#" class="w-24 mx-3">
                <img src="images/logo/AgradadLogo.png" alt="Agradad Automatic Door Factory">
            </a>

            <p class="text-2xl font-semibold tracking-wide">Agradad industrial doors</p>
        </div>
        <!-- menuBar -->
        <ul class="flex lg:w-8/12 justify-evenly ms-auto me-5">
            <!-- Home menuItem -->
            <li class="text-xl cursor-pointer font-medium group relative">
                <span>Home</span>
                <span class="absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-indigo-600 group-hover:w-3/6"></span>
                <span class="absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-indigo-600 group-hover:w-3/6"></span>
            </li>
            <!-- Corporate menuItem -->
            <li class="text-xl cursor-pointer font-medium group relative">
                <div class="relative inline-block text-left">
                    <button id="dropdownButton" class="bg-gray-800 text-white px-4 py-2 rounded">
                        Options ▼
                    </button>

                    <div id="dropdownMenu" class="absolute right-0 z-10 hidden mt-2 w-48 bg-white shadow-lg">
                        <a href="#" class="block px-4 py-2 text-gray-700 hover:bg-gray-100">Profile</a>
                        <a href="#" class="block px-4 py-2 text-gray-700 hover:bg-gray-100">Settings</a>
                        <a href="#" class="block px-4 py-2 text-gray-700 hover:bg-gray-100">Logout</a>
                    </div>
                </div>
            </li>
            <!-- Products menuItem -->
            <li class="text-xl cursor-pointer font-medium group relative">
                <span>Products</span>
                <span class="absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-indigo-600 group-hover:w-3/6"></span>
                <span class="absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-indigo-600 group-hover:w-3/6"></span>
            </li>
            <!-- Catalogs menuItem -->
            <li class="text-xl cursor-pointer font-medium group relative">
                <span>Catalogs</span>
                <span class="absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-indigo-600 group-hover:w-3/6"></span>
                <span class="absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-indigo-600 group-hover:w-3/6"></span>
            </li>
            <!-- Media menuItem -->
            <li class="text-xl cursor-pointer font-medium group relative">
                <span>Media</span>
                <span class="absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-indigo-600 group-hover:w-3/6"></span>
                <span class="absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-indigo-600 group-hover:w-3/6"></span>
            </li>
            <!-- Contact menuItem -->
            <li class="text-xl cursor-pointer font-medium group relative">
                <span>Contact</span>
                <span class="absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-indigo-600 group-hover:w-3/6"></span>
                <span class="absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-indigo-600 group-hover:w-3/6"></span>
            </li>
            <!-- aboutUs menuItem -->
            <li class="text-xl cursor-pointer font-medium group relative">
                <span>About Us</span>
                <span class="absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-indigo-600 group-hover:w-3/6"></span>
                <span class="absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-indigo-600 group-hover:w-3/6"></span>
            </li>
        </ul>
    </nav>

    <!-- navBar mobile version -->
    <nav class="w-full py-4 bg-red-500 flex lg:hidden">
        <!-- Menu Btn -->
        <button class="w-2/12 flex justify-center items-center text-3xl" id="mobileSideBarBtn">
            <i class="fa-solid fa-bars "></i>
        </button>
    </nav>
    <!-- menuBar mobile version -->
    <div class="fixed top-0 left-0 z-40 w-full h-screen transition-transform -translate-x-full lg:hidden bg-white border-e-[1px] border-black flex flex-col" id="mobileSideBar">
        <!-- menuHeader -->
        <div class="w-full flex p-4">
            <div class="w-4/12 bg-white"><img src="images/logo/AgradadLogo.png" alt="Agradad-Logo"></div>
            <div class="w-1/12 ms-auto text-3xl cursor-pointer" id="mobileSideBarClose"><i class="fa-solid fa-xmark"></i></div>
        </div>

    </div>












    <!-- Scripts -->
    <script src="node_modules/jquery/dist/jquery.min.js"></script>
    <script src="scripts/mobile/sideBar.js"></script>

</body>

</html>