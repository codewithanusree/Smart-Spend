function calculate()
{
    let country=document.getElementById("country").value;
    let amt=parseFloat(document.getElementById("bill").value);
    let tip=parseFloat(document.getElementById("tip").value);
    let people=parseInt(document.getElementById("no_people").value);

    document.getElementById("result").innerHTML = "";
    document.getElementById("results").innerHTML = "";


    if(!country || !amt )
    {
        alert("No input");
    }
    let tip_amt=amt*tip/100;
    let total_amt=(amt+tip_amt);
    let share=total_amt/people;
    
    document.getElementById("result").innerHTML=`Tip Amount: ${tip_amt} <br> Total Amount: ${total_amt} <br>`
    if(people>0)
    {
        document.getElementById("result").innerHTML+=`Share per person: ${share}`
    }
    switch(country)
    {
        case "th":
            amt*=2.30;
            tip_amt*=2.30;
            total_amt*=2.30;
            share*=2.30;
            break;
        case "ae":
            amt*=22.60;
            tip_amt*=22.60;
            total_amt*=22.60;
            share*=22.60;
            break;
        case "sg":
            amt*=61.00;
            tip_amt*=61;
            total_amt*=61;
            share*=61;
            break;
        case "my":
            amt*=18;
            tip_amt*=18;
            total_amt*=18;
            share*=18;
            break;
        case "mv":
            amt*=5.40;
            tip_amt*=5.40;
            total_amt*=5.40;
            share*=5.40;
            break;
        case "np":
            amt*=0.63;
            tip_amt*=0.63;
            total_amt*=0.63;
            share*=0.63;
            break;
        case "bt":
            amt*=1;
            tip_amt*=1;
            total_amt*=1;
            share*=1;
            break;
        case "lk":
            amt*=0.28;
            tip_amt*=0.28;
            total_amt*=0.28;
            share*=0.28;
            break;
        case "id":
            amt*=0.0052;
            tip_amt*=0.0052;
            total_amt*=0.0052;
            share*=0.0052;
            break;
        case "ch":
            amt*=94;
            tip_amt*=94;
            total_amt*=94;
            share*=94;
            break;
        case "us":
            amt*=83;
            tip_amt*=83;
            total_amt*=83;
            share*=83;
            break;
        case "ca":
            amt*=61;
            tip_amt*=61;
            total_amt*=61;
            share*=61;
            break;
        case "uk":
            amt*=105;
            tip_amt*=105;
            total_amt*=105;
            share*=105;
            break;
        case "au":
            amt*=56;
            tip_amt*=56;
            total_amt*=56;
            share*=56;
            break;
        case "de":
            amt*= 89;
            tip_amt*=89;
            total_amt*=89;
            share*=89;
            break;
        case "sa":
            amt*=22.10;
            tip_amt*=22.10;
            total_amt*=22.10;
            share*=22.10;
            break;
        case "qa":
            amt*=22.80;
            tip_amt*=22.80;
            total_amt*=22.80;
            share*=22.80;
            break;
        case "li":
            amt*=23;
            tip_amt*=23;
            total_amt*=23;
            share*=23;
            break;
        case "kh":
            amt*=0.020;
            tip_amt*=0.020;
            total_amt*=0.020;
            share*=0.020;
            break;
    }
    document.getElementById("results").innerHTML+=`In Indian Currency <br>Tip Amount: ${tip_amt.toFixed(2)} <br> Total Amount: ${total_amt.toFixed(2)} <br>`
    if(people>0)
    {
        document.getElementById("results").innerHTML+=`Share per person: ${share.toFixed(2)}`
    }
    document.getElementById("outputBox").style.display = "flex";

}