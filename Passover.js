let fund = Number(document.getElementById("fund").value);
let years = Number(document.getElementById("years").value);
let interest = Number(document.getElementById("interest").value);
let WantedValue = Number(document.getElementById("wantedValue").value);
let MonthlyRate;

let MonthlyResult = document.getElementById("monthlyResult");
let result = document.getElementById("result");

document.getElementById("fund").addEventListener(input, setFund)
document.getElementById("years").addEventListener(input, setYears)
document.getElementById("interest").addEventListener(input, setInterest)
document.getElementById("wantedValue").addEventListener(input, setWanted)
document.getElementById("submit").addEventListener(click, Calc)


function setYears(years){
    if ((years.target.value)<0 || isNaN((years.target.value)))
    {
        years= 0;
        alert("Invalid value, try again");
    }
    else{
        years = Number(years.target.value);
    }
}

function setFund(fund){
    if ((fund.target.value)<0 || isNaN((fund.target.value)))
    {
        fund= 0;
        alert("Invalid value, try again");
    }
    else{
        fund = Number(years.target.value);
    }}

    function setInterest(interest){
        if ((interest.target.value)<0 || isNaN((interest.target.value)))
        {
            interest= 0;
            alert("Invalid value, try again");
        }
        else {
            interest = Number(interest.target.value);
        }}

        function setFund(wantedValue){
            if ((wantedValue.target.value)<0 || isNaN((wantedValue.target.value)))
            {
                wantedValue= 0;
                alert("Invalid value, try again");
            }
            else{
                WantedValue = Number(wantedValue.target.value);
            }
        }
    
calc();{
MonthlyRate = fund*(1+interest)/(years*12).toFixed(2);
result.textContent = " Fund amount: " + funds + " Interest Amount: " + ( funds * (interest / 100)).toFixed(2) + " Total Amount: " + (funds + ( funds * (interest / 100)))
monthly_result.textContent = "Monthly Rate: " + MonthlyRate;

if (MonthlyRate > wantedValue)
    {
        MonthlyResult.textContent += "The rates do not suit your wanted amount. ";
    }
    else {
        MonthlyResult.textContent += " Good rates according to your expectations. ";
    }

}