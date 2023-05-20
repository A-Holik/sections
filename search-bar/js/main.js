let searchBtn = document.querySelector("#srch-btn");
let searchInput = document.querySelector("#srch-input");

searchInput.addEventListener('keypress',() => {
    if(event.key === 'Enter'){
        // console.log('enter pressed');
        searchBtn.click();
    }
});

searchBtn.addEventListener('click', () => {
    let x = searchInput.value;
    console.log(x);
});

