// Bird data
const birds = [
    {
        name: "Pardalote",
        img: "http://www.outgrabe.net/bird00.jpg",
        caption: "Pardalote by fir0002 (CC-by-NC)"
    },
    {
        name: "Purple Swamp Hen",
        img: "http://www.outgrabe.net/bird01.jpg",
        caption: "Purple swamp hen by Toby Hudson (CC-by-SA)"
    },
    {
        name: "White-headed Stilt",
        img: "http://www.outgrabe.net/bird02.jpg",
        caption: "White-headed Stilt by JJ Harrison (CC-by-SA)"
    },
    {
        name: "Inland Thornbill",
        img: "http://www.outgrabe.net/bird03.jpg",
        caption: "Inland Thornbill by Peter Jacobs (CC-by-SA)"
    },
    {
        name: "Rose Robin",
        img: "http://www.outgrabe.net/bird04.jpg",
        caption: "Rose Robin by JJ Harrison (CC-by-SA)"
    }
];

// Select elements
const birdImage = document.getElementById('bird-image');
const birdCaption = document.getElementById('bird-caption');
const buttons = document.querySelectorAll('button[data-bird]');

// Add event listeners to each button
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const index = button.getAttribute('data-bird');
        birdImage.src = birds[index].img;
        birdImage.alt = birds[index].name;
        birdCaption.textContent = birds[index].caption;
    });
});
