
window.addEventListener('load', function() {
	let dropdownMenu = document.querySelector('#dropdownMenu');
    let items = document.querySelectorAll('#dropdownMenu li span');
    let openedMenu = document.querySelector('#openedMenu');
    let openMenuItems = document.querySelectorAll('#openedMenu li a');
    let curUrl = document.location;


    function addOn() {
        let pageLocation = String(curUrl).split('/'),
            fileName = pageLocation[pageLocation.length-1],
            fileDoc = pageLocation[pageLocation.length-2];

        let projectcategory = String(fileName).split('-'),
            gg = projectcategory[projectcategory.length-2];

        $('#openedMenu').find('li > a[href*="' + gg + '"]').parent().addClass('on');
        $('.tabArea').find('a[href="../' + fileDoc + '/' + fileName + '"]').addClass('on');
        $('#dropdownMenu').find('li[id="menu_' + gg + '"]').addClass('on');
        $('.nav').find('div.' + gg).addClass('on');

        if ($('#openedMenu').find('li > a[href*="' + gg + '"]').parent().length) {
            console.log('success');
        } else {
            location.reload();
        }
    };

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
