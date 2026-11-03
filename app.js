(function () {
    "useStrict()";

    const buttonCat = document.getElementById("btn-cat");
    const cat = document.getElementById("cat");
    const dog = document.getElementById("dog");
    const cow = document.getElementById("cow");

    hide();

    function hide(){
        buttonCat.addEventListener("click", function(event) {
            const target = event.target;
                if(target.classList.contains("cat-btn")){
                    cat.classList.remove("cat-hid"); 
                }


        })}

})();

