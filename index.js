var random1 = Math.round(Math.random()*6);
var random2 = Math.round(Math.random()*6);

dice(".i1",random1);
dice(".i2",random2);

won(random1,random2);

function dice(c,random)
{
    if(random === 1)
        document.querySelector(c).setAttribute("src","./images/dice1.png");

    else if(random === 2)
        document.querySelector(c).setAttribute("src","./images/dice2.png");

    else if(random === 3)
        document.querySelector(c).setAttribute("src","./images/dice3.png");

    else if(random === 4)
        document.querySelector(c).setAttribute("src","./images/dice4.png");

    else if(random === 5)
        document.querySelector(c).setAttribute("src","./images/dice5.png");

    else if(random === 6)
        document.querySelector(c).setAttribute("src","./images/dice6.png");
}

function won(r1,r2)
{
    if(r1 > r2)
        document.querySelector(".title").innerHTML="Player 1";

    else if(r1 < r2)
        document.querySelector(".title").innerHTML="Player 2";

    else
        document.querySelector(".title").innerHTML="Draw";
}