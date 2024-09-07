function buttonclick(){
    colorchange();
}

function colorchange(){
    const overlay = document.getElementById("overlay");

    const randomColor = 'rgba(' + Math.round(Math.random() * 255) + 
                        ',' + Math.round(Math.random() * 255) + 
                        ',' + Math.round(Math.random() * 255) + ', 0.2)'; 
    overlay.style.backgroundColor = randomColor;

}

