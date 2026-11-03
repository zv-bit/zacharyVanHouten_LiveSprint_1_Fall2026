(function () {
    "useStrict()";

    const button = document.getElementById("button");
    const cat = document.getElementById("cat");
    const dog = document.getElementById("dog");
    const cow = document.getElementById("cow");

    hide();

    function hide(){
        button.addEventListener("click", function(event) {
            const target = event.target;
                if(target.classList.contains("cat-btn")){
                    cat.classList.remove("cat-hid");
                }


        })}

})();
