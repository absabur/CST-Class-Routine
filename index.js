const table = document.querySelector("table");
const main = document.querySelector(".main");
const cap = document.querySelector(".cap");
const details = document.querySelector(".details");
const img = details.querySelector(".img");
const para = details.querySelector(".para");
const backL = details.querySelector(".back-l");
const backR = details.querySelector(".back-r");
const color = document.querySelector(".color-change");
const p = document.querySelectorAll("p");

const SS = table.querySelector(".SS");
const DI = table.querySelectorAll(".DI");
const ISS = table.querySelectorAll(".ISS");
const ADUP = table.querySelectorAll(".ADUP");
const P2 = table.querySelectorAll(".P2");
const CGD2 = table.querySelector(".CGD2");
const M3 = table.querySelectorAll(".M3");

let day;
let room;
let period;


const display = (image, sub, code, day, room, period, name, number, email) => {
    day = day[0].toUpperCase() + day.slice(1).toLowerCase();
    console.log(day)
    details.style.display = "flex";
    table.style.display = "none";
    cap.style.display = "none";
    img.innerHTML = `<img src="images/${image}.jpg" alt="">`;
    para.innerHTML = `
    <p><b>Subject Name:</b> ${sub}</p>
    <p><b>Subject Code:</b> ${code}</p>
    <p><b>Day:<b> ${day}</p>
    <p><b>Room Number:</b> ${room}</p>
    <p><b>Period:</b> ${period}</p>
    <p><b>Teacher name:</b> ${name}</p>
    <p><b>Techer Mobile:</b> ${number}</p>
    <p><b>Teacer Email:</b> ${email}</p>
    `
}

SS.addEventListener("click",() => {
    details.style.display = "flex";
    table.style.display = "none";
    cap.style.display = "none";
    display("uh", "Social Science", "25811", "THURSDAY", "1104", "2:15 - 3:45", "মোঃ জাহাঙ্গীর আলম", "01781-980 824", "zahangireco95@gmail.com");
})

CGD2.addEventListener("click",() => {
    details.style.display = "flex";
    table.style.display = "none";
    cap.style.display = "none";
    display("ma", "Computer Graphics Design-II", "28532", "MONDAY", "Apps Lab", "1:30 - 3:45", "মোহাম্মদ আলী", "01712-710 603", "m_ali710603@yahoo.com");
})

for (let i = 0 ; i<DI.length ; i++){
    DI[i].addEventListener("click",() => {
        console.log(DI[i]);
        console.log(i);
        if (i == 0){
            room = "311";
            day = "SUNDAY";
            period = "1:30 - 3:45"
        }if(i == 1){
            room = "1308";
            day = "TUESDAY";
            period = "3:45 - 4:30"
        }if(i == 2){
            room = "1104";
            day = "THURSDAY";
            period = "1:30-2:15 "
        }
        display("uh", "Digital Electronics-I", "26831", day, room, period, "N/A", "N/A", "N/A");
    })
}

for (let i = 0 ; i<ISS.length ; i++){
    ISS[i].addEventListener("click",() => {
        if (i == 0){
            room = "1306";
            day = "SUNDAY";
            period = "3:45 - 4:30"
        }if(i == 1){
            room = "1404";
            day = "TUESDAY";
            period = "4:30 - 5:15"
        }if(i == 2){
            room = "Apps Lab";
            day = "WEDNESDAY";
            period = "1:30-3:45 "
        }
        display("ma", "IT Suppurt Services", "28533", day, room, period, "মোহাম্মদ আলী", "01712-710 603", "m_ali710603@yahoo.com");
    })
}

for (let i = 0 ; i<ADUP.length ; i++){
    ADUP[i].addEventListener("click",() => {
        if (i == 0){
            room = "1306";
            day = "SUNDAY";
            period = "4:30 - 5:15"
        }if(i == 1){
            room = "1208";
            day = "MONDAY";
            period = "4:30 - 6:45"
        }if(i == 2){
            room = "1306";
            day = "WEDNESDAY";
            period = "3:45 - 4:30"
        }
        display("uh", "Application Development Using Python", "28531", day, room, period, "উম্মে হাবিবা", "01723-673 632", "habiba.ru.bd@gmail.com");
    })
}

for (let i = 0 ; i<P2.length ; i++){
    P2[i].addEventListener("click",() => {
        if (i == 0){
            room = "1306";
            day = "SUNDAY";
            period = "5:15 - 6:45"
        }if(i == 1){
            room = "1208";
            day = "MONDAY";
            period = "3:45 - 4:30"
        }if(i == 2){
            room = "1308";
            day = "TUESDAY";
            period = "1:30 - 3:45"
        }
        display("uh", "Physics-II", "25922", day, room, period, "N/A", "N/A", "N/A");
    })
}

for (let i = 0 ; i<M3.length ; i++){
    M3[i].addEventListener("click",() => {
        if (i == 0){
            room = "1404";
            day = "TUESDAY";
            period = "5:15 - 6:00"
        }if(i == 1){
            room = "1404";
            day = "WEDNESDAY";
            period = "4:30 - 5:15"
        }if(i == 2){
            room = "1305";
            day = "THURSDAY";
            period = "3:45 - 4:30"
        }
        display("uh", "Mathematics-III", "25931", day, room, period, "N/A", "N/A", "N/A");
    })
}

backL.addEventListener("click",() => {
    location.reload();
})

backR.addEventListener("click",() => {
    location.reload();
})

const colorArr = ["#00203FFF","#606060FF","#101820FF","#195190FF","#603F83FF","#FAD0C9FF","#990011FF","#CBCE91FF","#FCF951FF","black","#ADEFD1FF","#D6ED17FF","#FEE715FF","#A2A2A1FF","#C7D3D4FF","#6E6E6DFF","#FCF6F5FF","#76528BFF","#422057FF"]
const bgColorArr = ["#ADEFD1FF","#D6ED17FF","#FEE715FF","#A2A2A1FF","#C7D3D4FF","#6E6E6DFF","#FCF6F5FF","#76528BFF","#422057FF","white","#00203FFF","#606060FF","#101820FF","#195190FF","#603F83FF","#FAD0C9FF","#990011FF","#CBCE91FF","#FCF951FF"]

let x=0; 
color.addEventListener("click",function(){
    
    main.style.color = `${colorArr[x]}`;
    cap.style.backgroundColor = `${bgColorArr[x]}`;
    details.style.color = `${colorArr[x]}`;
    details.style.backgroundColor = `${bgColorArr[x]}`;
    for (let i = 0 ; i<p.length ; i++){
        p[i].style.backgroundColor = `${bgColorArr[x]}`;
    }details
    x++;
    if(x>=colorArr.length){
        x = 0;
    }
})
