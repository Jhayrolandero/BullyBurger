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

//  Select the section with ID special-burgers
let specialSection = document.querySelector('#special-burgers')

// Inject the data to it by set attribute
specialSection.setAttribute('data-special-burgers', JSON.stringify(specialBurgers))


const steakBurgers = [
    {
        title: 'Classic Steak-Burger',
        desc: 'Our classic steak-burger featuring a juicy beef patty topped with fresh lettuce, ripe tomatoes, onions, pickles, and our special sauce, all sandwiched between a toasted sesame seed bun.',
        image: "../public/images/burgers/steak/1.png",
        price: 3.99
    },
    {
        title: 'Deluxe Steak-Burger',
        desc: 'Indulge in our deluxe version of the classic steak-burger, featuring a larger beef patty cooked to perfection, layered with crispy lettuce, vine-ripened tomatoes, caramelized onions, melted cheddar cheese, and our signature steak sauce, served on a toasted brioche bun.',
        image: "../public/images/burgers/steak/2.png",
        price: 5.99
    },
    {
        title: 'Bacon & Cheese Steak-Burger',
        desc: 'Savor the ultimate burger experience with our steak-burger topped generously with crispy bacon strips, melted American cheese, fresh lettuce, ripe tomatoes, pickles, and a spread of creamy mayo, all nestled inside a toasted artisan potato bun.',
        image: "../public/images/burgers/steak/3.png",
        price: 6.99
    },
    {
        title: 'Mushroom Swiss Steak-Burger',
        desc: 'Treat your taste buds to a gourmet delight! Our steak-burger is topped with a medley of sautéed mushrooms, layered with melty Swiss cheese, fresh baby spinach, and a dollop of truffle aioli, served on a toasted pretzel bun.',
        image: "../public/images/burgers/steak/4.png",
        price: 7.49
    },
    {
        title: 'BBQ Ranch Steak-Burger',
        desc: 'Get fired up with our tangy BBQ ranch steak-burger featuring a smoky beef patty topped with crispy onion rings, sharp cheddar cheese, fresh lettuce, ripe tomatoes, and a drizzle of zesty ranch dressing, all enclosed in a toasted onion bun.',
        image: "../public/images/burgers/steak/5.png",
        price: 6.79
    }
];

// console.log(steakBurgers);

let steakSection = document.querySelector('#steakhouse-burgers')
steakSection.setAttribute('data-steak-burgers', JSON.stringify(steakBurgers))



const miniBurgers = [
    {
        title: 'Classic Mini-Burger Trio',
        desc: 'A trio of mini-burgers featuring juicy beef patties topped with cheddar cheese, pickles, and our signature burger sauce, served on mini sesame seed buns.',
        image: "../public/images/burgers/mini/6.png",
        price: 8.99
    },
    {
        title: 'Spicy Chipotle Chicken Mini-Burgers',
        desc: 'Tender grilled chicken mini-burgers seasoned with spicy chipotle seasoning, topped with pepper jack cheese, lettuce, tomato, and chipotle mayo, served on mini ciabatta buns.',
        image: "../public/images/burgers/mini/7.png",
        price: 9.49
    },
    {
        title: 'Teriyaki Pineapple Pork Mini-Burgers',
        desc: 'Mini pork burgers glazed with sweet teriyaki sauce, topped with grilled pineapple slices, lettuce, red onion, and mayo, served on mini Hawaiian rolls.',
        image: "../public/images/burgers/mini/8.png",
        price: 9.99
    },
    {
        title: 'Mushroom Swiss Veggie Mini-Burgers',
        desc: 'Delicious veggie mini-burgers made with a blend of mushrooms, black beans, and quinoa, topped with Swiss cheese, sautéed mushrooms, arugula, and truffle aioli, served on mini whole wheat buns.',
        image: "../public/images/burgers/mini/9.png",
        price: 8.99
    },
    {
        title: 'BBQ Bacon Beef Mini-Burgers',
        desc: 'Savory beef mini-burgers topped with crispy bacon, melted cheddar cheese, tangy BBQ sauce, lettuce, and crispy onion straws, served on mini pretzel buns.',
        image: "../public/images/burgers/mini/10.png",
        price: 10.49
    }
];

let miniSection = document.querySelector('#mini-burgers')
miniSection.setAttribute('data-mini-burgers', JSON.stringify(miniBurgers))

const stackedBurgers = [
    {
        title: 'Classic Steakhouse Stack',
        desc: 'Transport yourself to a classic steakhouse with this stacked burger! Juicy beef patty topped with sautéed mushrooms, Swiss cheese, crispy onion rings, steak sauce, lettuce, and tomato, served on a toasted garlic butter bun.',
        image: "../public/images/burgers/stacked/11.png",
        price: 12.49
    },
    {
        title: 'Ultimate Bacon Cheeseburger Stack',
        desc: 'Our ultimate stacked burger featuring two juicy beef patties layered with crispy bacon, melted cheddar cheese, lettuce, tomato, red onion, pickles, and our special burger sauce, all stacked between three toasted sesame seed buns.',
        image: "../public/images/burgers/stacked/12.png",
        price: 12.99
    },
    {
        title: 'Southwest Chipotle Chicken Stack',
        desc: 'Spice up your day with our Southwest-inspired stacked chicken burger! Grilled chicken breast topped with pepper jack cheese, guacamole, jalapeño slices, lettuce, tomato, red onion, and chipotle mayo, sandwiched between a toasted ciabatta bun.',
        image: "../public/images/burgers/stacked/13.png",
        price: 11.99
    },
    {
        title: 'Portobello Mushroom Veggie Stack',
        desc: 'A delicious vegetarian option featuring a grilled portobello mushroom cap layered with roasted red pepper, spinach, caramelized onions, provolone cheese, tomato, arugula, and basil pesto aioli, served on a toasted multigrain bun.',
        image: "../public/images/burgers/stacked/14.png",
        price: 10.99
    },
    {
        title: 'BBQ Ranch Double Bacon Stack',
        desc: 'Indulge in our BBQ ranch double bacon stack! Two beef patties topped with crispy bacon, cheddar cheese, BBQ sauce, ranch dressing, lettuce, tomato, and crispy onion straws, all piled high on a toasted brioche bun.',
        image: "../public/images/burgers/stacked/15.png",
        price: 13.49
    }

];

let stackedSection = document.querySelector('#stacked-burgers')
stackedSection.setAttribute('data-stacked-burgers', JSON.stringify(stackedBurgers))

// Modal Close button

const closeModalBtn = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')


closeModalBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        const modal = btn.closest('#modal')
        closeModal(modal)
    })
})

function closeModal(modal) {
    if(modal == null) return

    modal.classList.remove('active')
    overlay.classList.remove('active')
}