let continueButton = document.querySelector('.continue-btn')

continueButton.addEventListener('click', cont)

function cont(){
    document.querySelector('.intro').style.animation = "fadeout 0.2s ease-out forwards"
    setTimeout(() => { 
        document.querySelector('.intro').style.display = 'none';
        document.querySelector('.header').style.display ="block"
        document.querySelector('.header').style.animation = "fadein 0.2s ease-in forwards"
        setTimeout(() => { 
            document.querySelector('.content').style.display ="block";
            document.querySelector('.content').style.animation ="fadein 0.2s ease-in forwards"
     }, 100);
      }, 
      
      200);
}

function selection() {
    document.querySelector('.content').style.animation = "fadeout 0.2s ease-out forwards"

    setTimeout(() => {  
        document.querySelector('.content').style.display = 'none';
        document.querySelector('.choice').style.display = "block"
        document.querySelector('.choice').style.animation = "fadein 0.2s ease-in forwards"
        document.querySelector('#randomSelection').innerHTML = '&nbsp;'
     }, 200);

     document.querySelector('#mealChoice').innerHTML = `${event.srcElement.id}`

    let array

    if (event.srcElement.id == 'breakfast') {
        array = ['Waffles','Bread','Ba Chor Mee', 'Fried Noodle', 'McDonald','Nasi Lemak','Prata']
    } else if (event.srcElement.id == 'lunch') {
        array = ['Buffet','Sandwiches','Burgers','Chinese Soup','Steak','Mookata','Fried Chicken','BBQ','Salad', 'Duck/Chicken Rice','Sushi/Sashimi','Bak Kut Teh','Steamboat','Pizza','Yong Tau Fu','Curry','Dim Sum','Economic Bee Hoon','Chinese Noodles','Carrot Cake','Roasted Pork','Mala','Prata','Porridge','Nasi Lemak','Ikea Meatballs','Grilled Chicken','Bread','Claypot Rice','Porridge','Taco','Char Kway Teow', 'Burrito','Cai Fan','Satay','Kebab','Pasta','Ramen','Western Soup','Tom Yum','Chinese Cuisine','Thai Cuisine','Vietnamese Cuisine','Indonesian Cuisine','Peranakan Cuisine','Malaysian Cuisine','Japanese Cuisine','Korean Cuisine','Indian Cuisine','French Cuisine','Italian Cuisine','Spanish Cuisine','Turkish Cuisine','American Cuisine','Mexican Cuisine']
    } else if (event.srcElement.id == 'dinner') {
        array = ['Buffet','Sandwiches','Burgers','Chinese Soup','Steak','Mookata','Fried Chicken','BBQ','Salad', 'Duck/Chicken Rice','Sushi/Sashimi','Bak Kut Teh','Steamboat','Pizza','Yong Tau Fu','Curry','Dim Sum','Economic Bee Hoon','Chinese Noodles','Carrot Cake','Roasted Pork','Mala','Prata','Porridge','Nasi Lemak','Ikea Meatballs','Grilled Chicken','Bread','Claypot Rice','Porridge','Taco','Char Kway Teow', 'Burrito','Cai Fan','Satay','Kebab','Pasta','Ramen','Western Soup','Tom Yum','Chinese Cuisine','Thai Cuisine','Vietnamese Cuisine','Indonesian Cuisine','Peranakan Cuisine','Malaysian Cuisine','Japanese Cuisine','Korean Cuisine','Indian Cuisine','French Cuisine','Italian Cuisine','Spanish Cuisine','Turkish Cuisine','American Cuisine','Mexican Cuisine']
    } else if (event.srcElement.id == 'supper') {
        array = ['Waffle','Sandwiches','Burgers', 'Fried Chicken','Pizza','Dim Sum']
    } else {
        array = ['Ice-cream','Waffle','Fried Chicken','Bubble Tea']
    }

    let randomBtn = document.querySelector('.random-btn')

    randomBtn.addEventListener('click',random)

    function random() {
    let randomElement = array[Math.floor(Math.random() * array.length)]
    document.querySelector('#randomSelection').innerHTML = randomElement + '!'
    }
}

let backButton = document.querySelector('#back-btn')
backButton.addEventListener('click', back)

function back(){
    document.querySelector('.choice').style.animation = "fadeout 0.2s ease-out forwards"
    setTimeout(() => {  
        document.querySelector('.choice').style.display = 'none';
        document.querySelector('.content').style.display = "block"
        document.querySelector('.content').style.animation = "fadein 0.2s ease-in forwards"
     }, 200);
}

window.onpopstate = function() {
    if (document.querySelector('.choice').style.display == 'block') {
        this.back()
    }
}