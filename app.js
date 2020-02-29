let button = document.querySelector('.anything-btn')
let choice = ['Buffet','Waffle','Sandwiches','Burgers','Chinese Soup','Steak','Mookata','Fried Chicken','BBQ','Salads', 'Duck/Chicken Rice','Sushi/Sashimi','Bak Kut Teh','Steamboat','Pizza','Yong Tau Fu','Curry','Dim Sum','Economic Bee Hoon','Chinese Noodles','Carrot Cake','Roasted Pork','Mala','Prata','Porridge','Nasi Lemak','Ikea Meatballs','Grilled Chicken','Bread','Claypot Rice','Porridge','Taco','Char Kway Teow', 'Burrito','Cai Fan','Satay','Kebab','Pasta','Ramen','Western Soup','Tom Yum','Chinese Cuisine','Thai Cuisine','Vietnamese Cuisine','Indonesian Cuisine','Peranakan Cuisine','Malaysian Cuisine','Japanese Cuisine','Korean Cuisine','Indian Cuisine','French Cuisine','Italian Cuisine','Spanish Cuisine','Turkish Cuisine','American Cuisine','Mexican Cuisine']
console.log(choice)

function random() {
    let randomElement = choice[Math.floor(Math.random() * choice.length)]
    document.querySelector('.choice').innerHTML = randomElement + '!'
}

button.addEventListener('click', random)