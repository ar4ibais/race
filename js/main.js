window.addEventListener('DOMContentLoaded', () => {
    const eng = document.querySelector('.eng'),
          rus = document.querySelector('.rus'),
          rusBtnEng = document.querySelector('.header__lang-rus--eng'),
          engBtnRus = document.querySelector('.header__lang-eng--rus');

    rusBtnEng.addEventListener('click', () => {
        eng.classList.add('hide');
        eng.classList.remove('show');
        eng.classList.remove('fade');

        rus.classList.add('show');
        rus.classList.add('fade');
        rus.classList.remove('hide');
    });

    engBtnRus.addEventListener('click', () => {
        rus.classList.add('hide');
        rus.classList.remove('show');
        rus.classList.remove('fade');

        eng.classList.add('show');
        eng.classList.add('fade');
        eng.classList.remove('hide');
    });
});