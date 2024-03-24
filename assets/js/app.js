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
    if(buttonOpenCountry && selectCountryContainer && flagCountry){
        buttonOpenCountry.addEventListener('click', () => {
                selectCountryContainer.classList.remove('d-none')
                selectCountryContainer.classList.add('d-flex', 'flex-column', 'gap-4')
        })
        flagCountry.addEventListener('click', () => {
            selectCountryContainer.classList.remove('d-none')
            selectCountryContainer.classList.add('d-flex', 'flex-column', 'gap-4')
        })
        countrys.forEach(item => {
            const div = document.createElement('div');
            div.classList.add('d-flex', 'align-items-center', 'gap-2');
            div.innerHTML = '<img src="' + item.img + '" class="object-fit-contain">';
            selectCountryContainer.appendChild(div); 
            if(div){
                div.addEventListener('click', () => {
                    if(changeCountry && selectCountryContainer){
                        div.addEventListener('click', () => {
                                selectCountryContainer.classList.add('d-none')
                                selectCountryContainer.classList.remove('d-flex', 'flex-column', 'gap-4')
                                flagCountry.src = item.img
                        })
                    }
                })
            }
            
        });
    }
    const inputSearch = document.getElementById('inputSearch')
    if(inputSearch){
        inputSearch.addEventListener('input', (e) => {
            const cancelSearch = document.getElementById("cancelSearch")
            cancelSearch.classList.remove('d-none')
            cancelSearch.addEventListener('click', () => {
                cancelSearch.classList.add('d-none')
                e.target.value = ""
            })
        })
    }
    const logoutButton = document.getElementById('logoutButton')
    if(logoutButton){
        const containerLogout = document.getElementById('containerLogout')
        logoutButton.addEventListener('click', () => {
            containerLogout.style.zIndex = "999"
            containerLogout.style.opacity = "1"
        })
        const cancelLogout = document.getElementById('cancelLogout')
        if(cancelLogout) {
            cancelLogout.addEventListener('click', () => {
                containerLogout.style.zIndex = "-999"
                containerLogout.style.opacity = "0"
            })
        }
    }
    const inputSearchHelp = document.getElementById('inputSearchHelp')
    if(inputSearchHelp){
        const contenedorSearchHelp = document.getElementById("contenedorSearchHelp")
        inputSearchHelp.addEventListener('input', (e) => {
            console.log(e.target.value.length)
            contenedorSearchHelp.style.zIndex = "1001"
            contenedorSearchHelp.style.opacity = "1"
            if(e.target.value.length == 0){
                contenedorSearchHelp.style.zIndex = "-1001"
                contenedorSearchHelp.style.opacity = "0" 
            }
        })
    }

    const itemFood = document.querySelectorAll('.itemFood')
    if(itemFood){
        const totalItemsContainer = document.getElementById('totalItemsContainer')
        const page12 = document.getElementById('page12')
        itemFood.forEach(item => {
            item.addEventListener('click', () => {
                if(totalItemsContainer){
                    if(!totalItemsContainer.classList.contains('totalItemsActive')){
                        totalItemsContainer.classList.add('totalItemsActive')
                    }
                }
                if(page12){
                    page12.style.paddingBottom = "120px"
                }
                if(item.classList.contains('itemActive')){
                    item.classList.remove('itemActive')
                }else{
                    item.classList.add('itemActive')
                }
            });
           
          });
    }
})