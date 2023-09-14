var glasList1 = document.getElementById('glass-list-1');
var glasList2 = document.getElementById('glass-list-2');
var glasList3 = document.getElementById('glass-list-3');

var btnGlassList1 = document.getElementById('btn-glass-1');
var btnGlassList2 = document.getElementById('btn-glass-2');
var btnGlassList3 = document.getElementById('btn-glass-3');

btnGlassList1.onclick = function() {
    glasList1.style.display = 'initial';
    glasList2.style.display = 'none';
    glasList3.style.display = 'none';

    btnGlassList1.classList.add('nav__button-border');
    btnGlassList2.classList.remove('nav__button-border');
    btnGlassList3.classList.remove('nav__button-border');
}


btnGlassList2.onclick = function() {
    glasList1.style.display = 'none';
    glasList2.style.display = 'initial';
    glasList3.style.display = 'none';

    btnGlassList1.classList.remove('nav__button-border');
    btnGlassList2.classList.add('nav__button-border');
    btnGlassList3.classList.remove('nav__button-border');
}


btnGlassList3.onclick = function() {
    glasList1.style.display = 'none';
    glasList2.style.display = 'none';
    glasList3.style.display = 'initial';

    btnGlassList1.classList.remove('nav__button-border');
    btnGlassList2.classList.remove('nav__button-border');
    btnGlassList3.classList.add('nav__button-border');
}