// gettin variables
var spider = document.getElementById('spiderman');
var thanos = document.getElementById('thanos');
var buttonR = document.getElementById('buttonR');
var buttonG = document.getElementById('buttonG');
var txt = document.getElementById('text');
var winner = document.getElementById('winner');
var loser = document.getElementById('loser');

//resets the race when winner or loser is clicked
function resetRace()
{
    winner.src = "";
    loser.src = "";
    thanos.style = "visibility: visible;";
    spiderman.style = "visibility: visible;";
    buttonG.style = "visibility: hidden;";
    buttonR.style = "visibility: visible;";
    txt.innerText = "Bop it to start";
    document.body.style.backgroundColor = "red";
}

// onlick event to start race
function startrace()
{
    document.body.style.backgroundColor = "green";
    txt.innerText ="";
    buttonG.style = "visibility: visible;";
    buttonR.style = "visibility: hidden;";
    // sets images all the way
    // to the left at beginining 
    spider.style.left = 0;
    thanos.style.left = 0;
    // every so often it runs the racing function
    t = setInterval(racing, 1);
};

// ehat actually moves images
function racing()
{

    //parses the css left then
    //adds randnum to it
    spider.style.left = (parseInt(spider.style.left, 10) + Math.round(Math.random()*2)) + 'px';
    thanos.style.left = (parseInt(thanos.style.left, 10) + Math.round(Math.random()*2)) + 'px';
    // if spiderman is at finish line this happens
    if((parseInt(spider.style.left, 10)) > window.screen.width)
    {
        //stops interval
        clearInterval(t);
        thanos.style = "visibility: hidden;";
        spiderman.style = "visibility: hidden;";
        winner.src = "spidermanwin.gif";
        loser.src ="thanosloss.png";
        buttonG.style = "visibility: hidden;";
        document.body.style.backgroundColor = "blue";
    }
    // if thanos is at finish line this happens
    if((parseInt(thanos.style.left, 10)) > window.screen.width)
    {
        //stops inteval
        clearInterval(t);
        thanos.style = "visibility: hidden;";
        spiderman.style = "visibility: hidden;";
        winner.src = "thanos win.gif";
        loser.src = "spidermanloss.gif";
        buttonG.style = "visibility: hidden;";
        document.body.style.backgroundColor = "purple";
    }
};