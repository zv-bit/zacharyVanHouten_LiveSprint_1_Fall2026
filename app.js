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
        })
        buttonDog.addEventListener("click", function(event) {
            dog.classList.remove("hidden");
        })
        buttonCow.addEventListener("click", function(event) {  
            cow.classList.remove("hidden");
        })}

        function hide(){
             hideCat.addEventListener("click", function(event) {
                cat.classList.add("hidden");
        })
            hideDog.addEventListener("click", function(event) {
                dog.classList.add("hidden");
        })
            hideCow.addEventListener("click", function(event) {  
                cow.classList.add("hidden");
        })
        }


})();

