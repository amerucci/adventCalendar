var AdventCalendar = document.getElementById("calendar");
var cadeau = document.getElementById("cadeau");

//Je génère un objet Case
function Box(AdventCalendar, day) {

    this.content = function () {
        //Génération des cases
        var box = document.createElement("div");
        AdventCalendar.appendChild(box);
        box.id = "box" + day;
        box.innerHTML = day;
        box.classList = "col-12 col-md-6 col-lg-2 justify-content-center";

        //Génération de la modale
        var modal = document.createElement("div");
        
        AdventCalendar.append(modal);
        modal.id="myModal";
        modal.classList = "modal";

        var modalContent = document.createElement("div");  
        modal.append(modalContent);
        modalContent.classList = "modal-content";



        box.onclick = function () {
            // cadeau.innerHTML = "voici le cadeau du jour " + day
            // return false;
           
            var modal = document.getElementById("myModal");
            modal.style.display = "block";

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


};

generate();