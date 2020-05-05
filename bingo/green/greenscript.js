

function clicked() {
    var x = event.target.id;
    console.log(x);
    document.getElementById(x).style.background = "rgba(114,210,39,1)";

    if (localStorage.getItem(x) == "true") {
        console.log("1");
        localStorage.setItem(x, "false");
        console.log(x);
        document.getElementById(x).style.background = "white";
        document.getElementById(x).style.color = "black";
    }
    else  {
        console.log("2");
        localStorage.setItem(x, "true");
        console.log(x);
        ;
        document.getElementById(x).style.background = "rgba(114,210,39,1)";
        document.getElementById(x).style.color = "white";
    }

    if (x == "cell12") {
        document.getElementById(x).style.background = "rgba(114,210,39,1)";
        document.getElementById(x).style.color = "white";
    }


}

function reset() {
    for (i = 0; i < 25; i++) {
        var y = cell.concat(i);
        localStorage.setItem(y, "false");
        document.getElementById(y).style.background = "white";
        document.getElementById(y).style.color = "black";

        if (i == "12") {
            document.getElementById(y).style.background = "rgba(114,210,39,1)";
            document.getElementById(y).style.color = "white";
        }
        
    }
}

function cleared() {

    for (i = 0; i < 25; i++) {
        var z = cell.concat(i);
        localStorage.removeItem(z);
        document.getElementById(z).style.background = "white";
        document.getElementById(z).style.color = "black";

        if (i == "12") {
            document.getElementById(z).style.background = "rgba(114,210,39,1)";
            document.getElementById(z).style.color = "white";
        }
    }
}
