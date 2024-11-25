let appelchecker = "no";
let counter = 0;

const appel2 = document.getElementById("appel")
const buttonsk = document.getElementById("buttonsk")
const song = document.getElementById("song")
let hp = document.getElementById("hp");
let hpcounter = 3;
const bar2progress = document.getElementById("bar2progress")
let jumpchecker = "no";
const bone = document.getElementById("bone");
const test = document.getElementById("test");
const fightaction = document.getElementById("fight");
const act = document.getElementById("act");
const item = document.getElementById("item");
const mercy = document.getElementById("mercy");
const enemy = document.getElementById("enemy");
const sans = document.getElementById("sans");
const textfight = document.getElementById("text_fight");
const hit = document.getElementById("hit")
const cancel = document.getElementById("cancel")
const pick = document.getElementById("pick");
let enter = document.getElementById('enter');
const options = document.getElementById("options");
const hello = document.getElementById("hello");
let player = document.getElementById("player"); 


function items(){
    pick.style.display = "none";
    buttonsk.style.display = "none";
    appel2.style.display = "block";
    cancel.style.display = "block";
    if(appelchecker == "yes"){
        console.log("asdbhasdkhjahskjdhasjkhdjkashjkdakjs")
        appel2.style.display = "none"
    }
}

function appel(){
    appel2.style.display = "none";
    cancel.style.display = "none";
    appelchecker = "yes";
    hpcounter+=1
    bar2progress.style.width = (parseFloat(bar2progress.style.width) + 1) + "vw";
    enter.innerHTML = "YOU ATE THE APPLE";
    setTimeout(function(){
        fight();
    },1500)
}

function klik(){
    jump();
}

function start(){
    let username = document.getElementById("username").value
    document.getElementById("namechooser").style.display = "none";
    document.getElementById("alles").style.opacity = "1";
    document.getElementById("alles").style.pointerEvents = "all";
    document.getElementById("personname").innerHTML = username;
    song.play()
}

// function voor alles normaal zetten

function normaal(){
    appel2.style.display = "none";
    buttonsk.style.display = "flex";
    keyboard = "off";
    bone.style.display = "none";
    textfight.style.width = "40vw";
    fightaction.style.display = "block";
    act.style.display = "block";
    item.style.display = "block"
    mercy.style.display = "block";
    pick.style.display = "block"
    test.style.display = "none";
    hit.style.display = "none";
    hello.style.display = "none";    
    cancel.style.display = "none";
    enter.innerHTML = "";
    player.style.display = "none";
}

function attack1(){
    buttonsk.style.display = "none";
    hit.style.display = "block"
    cancel.style.display = "block"
    pick.style.display = "none"
}

function attack2(){

    // knoppen weghalen

    fightaction.style.display = "none";
    act.style.display = "none";
    item.style.display = "none"
    mercy.style.display = "none";
    // damage slice///////////////////////////
    let barprogress = document.getElementById("barprogress")
    let bar = document.getElementById("bar")

    let width = 0;
    bar.style.display = "block";
    const moving = setInterval(function(){
        if(width == 120){
            console.log("5")
            clearInterval(moving)
            bar.style.display = "none";
        }else{
            barprogress.style.width = width + "%"
            width += 20;
        }
    },60)

    
// enemy blink
    
    
    let count = 0;
    setTimeout(function(){
        const enemyblink = setInterval(function (){
            if(count == 3){
                clearInterval(enemyblink)
                enemy.style.visibility = 'visible';
            }else{
                const currentVisibility = enemy.style.visibility;
                enemy.style.visibility = (currentVisibility === 'hidden') ? 'visible' : 'hidden';
                count++
            }
        },250)
    },500)
    


    // enemy hp bar/////////////////////

    let enemyhpbar = document.getElementById("enemyhpbar")
    let enemyhp = document.getElementById("enemyhp")
    
    if(counter == 0){
        enemyhp.style.width = '75%';
        console.log(counter)
    }
    if(counter == 1){
        enemyhp.style.width = '50%';
        console.log(counter)
        enter.style.display = "block"
    }
    if(counter == 2){
        enemyhp.style.width = '25%';
        console.log(counter)
        enter.style.display = "block"
    }

    // eindbattle code
    if(counter == 3){
        enemyhp.style.width = '0%';
        console.log(counter)
        setTimeout(function(){
            sans.style.display = "none";
            textfight.innerHTML +="YOU DEFEATED SANS"
        },4000)
        setTimeout(function(){
            textfight.innerHTML =" "
        },6000)
        setTimeout(function(){
            reloadpage();
        },8000)
        enter.style.display = "block"
    }
    counter++;

    const punch = document.getElementById("punch")
    setTimeout(function(){
        punch.play()
    },375)

    // alle tekst stuff

    hit.style.display = "none"
    cancel.style.display = "none"
    enter.innerHTML = "YOU ATTACKED"
    setTimeout(function(){
        enter.innerHTML = "";
    },1000)


    // battlecaller
    setTimeout(function(){
        fight();
    },4000)
    
}

    // voor het acten

function acting1(){
    buttonsk.style.display = "none";
    pick.style.display = "none";
    hello.style.display = "block";
    cancel.style.display = "block";
}

function acting2(){

    // knoppen weghalen

    fightaction.style.display = "none";
    act.style.display = "none";
    item.style.display = "none"
    mercy.style.display = "none";

    enter.innerHTML = "YOU SAID HELLO";
    hello.style.display = "none";
    cancel.style.display = "none";

    setTimeout(function(){
        enter.innerHTML = "SANS SAID HELLO BACK";
    },2000)
    setTimeout(function(){
        fight()
    },4500)
    
}

    // de aanval van de tegenstander
let keyboard = "off"
function fight(){
    cancel.style.display = "none";
    appel2.style.display = "none";
    pick.style.display = "none";
    keyboard ="on"
    test.style.display = "block";
    test.innerHTML = "";
    enter.innerHTML = "";
    player.style.display = "block";
    if(keyboard == "on")
    window.addEventListener('keydown', (event)=>{
        if(event.key == "z"){
            jump();
        }
    })
    
    // bone traveler
    
    let checker = "no"
    let bonecounter = 90;

    const bonetraveler = setInterval(function(){
        bone.style.display = "block";
        if(checker == "yes"){
            bone.style.display = "none";
            clearInterval(bonetraveler)
        }else{
            bone.style.left = bonecounter + "%";
            bonecounter-=6;
            console.log(bonecounter)
            if(bonecounter <= 1){
                bonecounter = 90;
            }
            // hit detection
           
            if(bonecounter == 12 && jumpchecker == "no"){
                hpcounter-=1;
                bar2progress.style.width = hpcounter + "vw"
            }

            if(hpcounter == 3){
                hp.innerHTML = "30/30"
            }
            if(hpcounter == 2){
                hp.innerHTML = "20/30"
            }
            if(hpcounter == 1){
                hp.innerHTML = "10/30"
            }
            // if you die
            if(hpcounter == 0){
                clearInterval(bonetraveler)
                bone.style.display = "none"
                hp.innerHTML = "0/30"
                document.getElementById("dead").style.display = "block"
                setTimeout(function(){
                    reloadpage()
                },1500)
               
            }
        }
    },100)
    setTimeout(function(){
        checker = "yes"
    },9999)

    setTimeout(function(){
        if(hpcounter > 0){
            normaal();
        }
        
    },10000)

    
}

function jump(){
    jumpchecker = "yes";
    if(player.classList != "animate"){
        player.classList.add("animate");
    }
    setTimeout(function(){
        player.classList.remove("animate");
        jumpchecker = "no";
    },500)
}

function reloadpage(){
    location.reload();
}

function mercygo(){
    pick.style.display = "none";
    buttonsk.style.display = "none";
    enter.innerHTML = "YOU SPARED SANS";
    sans.style.opacity = "0.3"
    setTimeout(function(){
        reloadpage();
    },1500)
}