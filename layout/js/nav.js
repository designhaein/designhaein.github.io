window.addEventListener('load', function() {
	let dropdownMenu = document.querySelector('#dropdownMenu');
    let items = document.querySelectorAll('#dropdownMenu li span');
    let openedMenu = document.querySelector('#openedMenu');
    let openMenuItems = document.querySelectorAll('#openedMenu li a');

    function addOn() {
        let pageLocation = String(document.location).split('/'),
            fileName = pageLocation[pageLocation.length-1],
            fileDoc = pageLocation[pageLocation.length-2];

        let projectcategory = String(fileName).split('-'),
            gg = projectcategory[projectcategory.length-2];

        $('#openedMenu').find('li > a[href*="' + gg + '"]').parent().addClass('on');
        $('.tabArea').find('a[href="../' + fileDoc + '/' + fileName + '"]').addClass('on');
        $('#dropdownMenu').find('li[id="menu_' + gg + '"]').addClass('on');
        $('.nav').find('div.' + gg).addClass('on');
    }

    function handleDropMenu(e) {
        openedMenu.classList.toggle('opened');
        dropdownMenu.classList.toggle('opened');
        addOn();
    }

    items.forEach(e => {
        e.addEventListener("click", function(){
            handleDropMenu(e);
        })
    });

    addOn();

})
addOn();



