(function () {
    "useStrict()";

    const buttonCat = document.getElementById("btn-cat");
    const buttonDog = document.getElementById("btn-dog");
    const buttonCow = document.getElementById("btn-cow");

    const hideCat = document.getElementById("hide-cat");
    const hideDog = document.getElementById("hide-dog");
    const hideCow = document.getElementById("hide-cow");

    const cat = document.getElementById("cat-wrapper");
    const dog = document.getElementById("dog-wrapper");
    const cow = document.getElementById("cow-wrapper");

    reveal();
    hide();

    function reveal(){
        buttonCat.addEventListener("click", function(event) {
            cat.classList.remove("hidden");
            buttonCat.classList.add("hidden");
        })
        buttonDog.addEventListener("click", function(event) {
            dog.classList.remove("hidden");
            buttonDog.classList.add("hidden");
        })
        buttonCow.addEventListener("click", function(event) {  
            cow.classList.remove("hidden");
            buttonCow.classList.add("hidden");
        })}

        function hide(){
             hideCat.addEventListener("click", function(event) {
                cat.classList.add("hidden");
                buttonCat.classList.remove("hidden");
        })
            hideDog.addEventListener("click", function(event) {
                dog.classList.add("hidden");
                buttonDog.classList.remove("hidden");
        })
            hideCow.addEventListener("click", function(event) {  
                cow.classList.add("hidden");
                buttonCow.classList.remove("hidden");
        })
        }


})();

