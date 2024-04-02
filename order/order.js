const specialBurgers = [
    {
        title: "Erix's Special",
        desc: "Erix's Special is a mouthwatering burger creation that stands out from the crowd. This burger masterpiece starts with a juicy, handcrafted beef patty made from premium-quality meat, seasoned to perfection with a secret blend of savory spices and herbs. The patty is then grilled to absolute perfection, resulting in a delectable outer crust that seals in all the succulent flavors.",
        image: "../public/images/burgers/burger-1.svg"
    },
    {
        title: "Aze's Whomper",
        desc: "Aze's Whomper is a burger that promises to deliver an explosive flavor experience like no other. This towering creation starts with two thick, juicy beef patties that are expertly seasoned with a bold blend of spices, including a hint of smoky chipotle for an added kick. \n These patties are then sandwiched between two buttery brioche buns that have been lightly toasted to achieve the perfect crunch. But the real showstopper lies in the toppings that adorn this burger masterpiece.",
        image: "../public/images/burgers/burger-2.svg"
    },
    {
        title: "Cjay's Muncher",
        desc: "Cjay's Muncher is a burger that promises to satisfy even the most insatiable of appetites. This colossal creation starts with a thick, juicy beef patty that is expertly seasoned with a proprietary blend of herbs and spices, ensuring that every bite is bursting with flavor \nThe patty is then nestled between two pillowy soft, buttery brioche buns that have been lightly toasted to perfection, providing a satisfying crunch with each bite. But the real star of the show is the abundance of toppings that adorn this burger masterpiece.",
        image: "../public/images/burgers/burger-3.svg"
    }
]

let specialSection = document.querySelector('#special-burgers')
specialSection.setAttribute('data-special-burgers', JSON.stringify(specialBurgers))

