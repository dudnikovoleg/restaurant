window.onload = function () {
    var subMenu = document.getElementById('submenu');

    document.getElementById('menu-button').addEventListener('click', openBox, false);
    function openBox() {
        if(subMenu.style.height == '100%') {
            subMenu.style.height = '500px';
            this.innerHTML = 'see more';
        }
        else {
            subMenu.style.height = '100%';
            this.innerHTML = 'close';
        }

    }
};