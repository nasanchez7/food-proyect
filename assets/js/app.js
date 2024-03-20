window.addEventListener('load', () => {
    const changeCountry = document.getElementById('changeCountry')
    const countrys = [{
        img: "./assets/img/eeuu.png"  
      },{
          img: "./assets/img/google.png"  
        },
        {
          img: "./assets/img/eeuu.png"  
        },]
    const selectCountryContainer = document.getElementById('selectCountryContainer')
    const buttonOpenCountry = document.getElementById('buttonOpenCountry')
    const flagCountry = document.getElementById('flagCountry')
    if(buttonOpenCountry && selectCountryContainer){
        buttonOpenCountry.addEventListener('click', () => {
                selectCountryContainer.classList.remove('d-none')
                selectCountryContainer.classList.add('d-flex', 'flex-column', 'gap-4')
        })
        flagCountry.addEventListener('click', () => {
            selectCountryContainer.classList.remove('d-none')
            selectCountryContainer.classList.add('d-flex', 'flex-column', 'gap-4')
    })
    }
    countrys.forEach(item => {
        const div = document.createElement('div');
        div.classList.add('d-flex', 'align-items-center', 'gap-2');
        div.innerHTML = '<img src="' + item.img + '" class="object-fit-contain">';
        selectCountryContainer.appendChild(div); 
        div.addEventListener('click', () => {
            if(changeCountry && selectCountryContainer){
                div.addEventListener('click', () => {
                        selectCountryContainer.classList.add('d-none')
                        selectCountryContainer.classList.remove('d-flex', 'flex-column', 'gap-4')
                        flagCountry.src = item.img
                })
            }
        })
    });
    
})