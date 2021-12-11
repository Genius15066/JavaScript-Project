document.getElementById('btn').addEventListener('click',function(){
    const countryName=country();
    console.log(countryName)
    getData(countryName);
})

function country(){
    const countryName=document.getElementById('country-name').value;
    
    return countryName;
}

function getData(cname){
    fetch("https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/total?country="+cname +"", {
    "method": "GET",
    "headers": {
        "x-rapidapi-key": "f4f0a1e37fmsh26955d87fe72dd1p1f4b75jsnd3dbfff51dd6",
        "x-rapidapi-host": "covid-19-coronavirus-statistics.p.rapidapi.com"
    }
})
.then(response=>response.json())
.then(data=>coronaDesk(data)); 
}

function coronaDesk(report){
    document.getElementById('country-input').innerText=country();
    document.getElementById('confirmed').innerText=report.data.confirmed;
    document.getElementById('death').innerText=report.data.deaths;
    document.getElementById('last-checked').innerText=report.data.lastChecked.split("T")[0];
    console.log(report.data)

}
