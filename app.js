const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-List");
arrows.forEach((arrow, i)=>{
    const itemNumber = movieLists[i].querySelectorAll("img").length;
    let clickCounter = 0;
    arrow.addEventListener("click", ()=>{
        clickCounter++; 
        if(itemNumber - (4+clickCounter)>=0){
            movieLists[i].style.transform = `translateX(${
                movieLists[i].computedStyleMap().get("transform")[0].x.value
    
            -300}px)`;

        } else{
            movieLists[i].style.transform = "translateX(0)";
            clickCounter = 0;
        }
        

    });
    console.log(movieLists[i].querySelectorAll("img").length)


});
document.querySelector('.subscribe-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.querySelector('.subscribe-input').value;
    console.log('Subscribed with email:', email);
    alert('Thank you for subscribing!');
});
