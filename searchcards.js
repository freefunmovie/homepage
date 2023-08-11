function searchProducts(){
    const input = document.getElementById('filter').value.toUpperCase();
    const cardContainer = document.getElementById('gallery');
    console.log(cardContainer);

    const cards = cardContainer.getElementsByClassName('banner');
    console.log(cards);

    for(let i = 0; i < cards.length; i++){
        let title = cards[i].querySelector(".bannertxt");
        console.log(title);

        if(title.innerText.toUpperCase().indexOf(input) > -1){
            cards[i].style.display = "";
        }else{
            cards[i].style.display = "none";
        }
    }
}