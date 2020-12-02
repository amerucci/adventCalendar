var AdventCalendar = document.getElementById("calendar");
var cadeau = document.getElementById("cadeau");

var adventBox = [{
        id: 1,
        jour: 'Si on faisait le coup du bouclier humain ?[...] Par exemple, Sire, Léodagan et moi on fait semblant de vous prendre en otage : on vous met une dague sous le cou et on traverse le camp adverse en gueulant : " Bougez pas, bougez pas ou on bute le roi!"...',
        img: 'img/gift-box.png'
    },
    {
        id: 2,
        jour: 'Putain, en plein dans sa mouille !',
        img: 'img/gift-box.png'
    },
    {
        id: 3,
        jour: "3",
        img: 'img/gift-box.png'
    },
    {
        id: 4,
        jour: "4",
        img: 'img/gift-box.png'
    },
    {
        id: 5,
        jour: "5",
        img: 'img/gift-box.png'
    },
    {
        id: 6,
        jour: "6",
        img: 'img/gift-box.png'
    },
    {
        id: 7,
        jour: "7",
        img: 'img/gift-box.png'
    },
    {
        id: 8,
        jour: "8",
        img: 'img/gift-box.png'
    },
    {
        id: 9,
        jour: "9",
        img: 'img/gift-box.png'
    },
    {
        id: 10,
        jour: "10",
        img: 'img/gift-box.png'
    },
    {
        id: 11,
        jour: "11",
        img: 'img/gift-box.png'
    },
    {
        id: 12,
        jour: "12",
        img: 'img/gift-box.png'
    },
    {
        id: 13,
        jour: "13",
        img: 'img/gift-box.png'
    },
    {
        id: 14,
        jour: "14",
        img: 'img/gift-box.png'
    },
    {
        id: 15,
        jour: "15",
        img: 'img/gift-box.png'
    },
    {
        id: 16,
        jour: "16",
        img: 'img/gift-box.png'
    },
    {
        id: 17,
        jour: "17",
        img: 'img/gift-box.png'
    },
    {
        id: 18,
        jour: "18",
        img: 'img/gift-box.png'
    },
    {
        id: 19,
        jour: "19",
        img: 'img/gift-box.png'
    },
    {
        id: 20,
        jour: "20",
        img: 'img/gift-box.png'
    },
    {
        id: 21,
        jour: "21",
        img: 'img/gift-box.png'
    },
    {
        id: 22,
        jour: "22",
        img: 'img/gift-box.png'
    },
    {
        id: 23,
        jour: "23",
        img: 'img/gift-box.png'
    },
    {
        id: 24,
        jour: "24",
        img: 'img/gift-box.png'
    },

];

//Génération de la Modal
function Modal() {
    this.content = function () {
        //Génération de la modal
        var modal = document.createElement("div");
        AdventCalendar.append(modal);
        modal.id = "myModal";
        modal.classList = "modal";
        //Génération de la modal content
        var modalContent = document.createElement("div");
        modal.append(modalContent);
        modalContent.classList = "modal-content";
        //Génération du bouton close
        var close = document.createElement("span");
        modalContent.append(close);
        close.classList = "close";
        close.innerHTML = "&times;";
        //Génération du titre de la Modal
        var h1 = document.createElement("h2");
        modalContent.append(h1);
        h1.id = "titre";
        //Génération du paragraphe qui accueillera le cadeau
        var para = document.createElement("p");
        modalContent.append(para);
        para.id = "modalContent";
    }
}


//Je génère un objet Case
function Box(AdventCalendar, day) {

    this.content = function () {
        //Génération des cases
        var box = document.createElement("div");
        AdventCalendar.appendChild(box);
        box.id = "box" + day;
        box.innerHTML = day;
        box.classList = "col-12 col-md-6 col-lg-2 justify-content-center";





        box.onclick = function () {
            // cadeau.innerHTML = "voici le cadeau du jour " + day
            // return false;

            var modal = document.getElementById("myModal");
            var span = document.getElementsByClassName("close")[0];
            var modalContent = document.getElementById("modalContent");
            var titre = document.getElementById("titre");

            modal.style.display = "block";

            modal.onclick = function () {
                modal.style.display = "none";

            }

            span.onclick = function () {
                modal.style.display = "none";

            }

            modalContent.innerHTML = adventBox[day - 1].jour;
            titre.innerHTML = "Jour "+day;

        }

    }
}

//Je crée une fonction qui va générer des cases autant de fois que souhaité
function generate() {
    var box = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]
    var i = box.length
    while (i != 1) {
        i--
        let randomNumber = Math.floor(Math.random() * i)
        box[i] = new Box(AdventCalendar, box[randomNumber]);
        box[i].content();
        box.splice(randomNumber, 1);
        // console.log(box)
    }
    modal = new Modal();
    modal.content();

};

generate();