

window.addEventListener('load', function() {
	let dropdownMenu = document.querySelector('#dropdownMenu');
    let items = document.querySelectorAll('#dropdownMenu li span');
    let openedMenu = document.querySelector('#openedMenu');
    let openMenuItems = document.querySelectorAll('#openedMenu li a');

    console.log(dropdownMenu)

    function handleDropMenu(e) {
        openedMenu.classList.toggle('opened');
        dropdownMenu.classList.toggle('opened');
    }

    function handleClickMenu(e, index) {
        console.dir(index);
        console.dir(e);
        let targetLi = e.parentElement;
        targetLi.classList.toggle('on');
    }


    items.forEach(e => {
        e.addEventListener("click", function(){
            handleDropMenu(e);
        })
    });
        
    openMenuItems.forEach(function(el, index) {
        el.addEventListener("click", function(){
            handleClickMenu(el, index);
        })
    })
})