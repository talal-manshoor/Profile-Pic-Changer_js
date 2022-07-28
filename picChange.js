window.addEventListener( "load" , function () { 
    document.querySelector("input[type=file]").addEventListener("change", function () {
        var img = document.querySelector("img");
        img.src = URL.createObjectURL(this.files[0]);
    });
} );
    