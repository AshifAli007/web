

var shopData = [

    {

        "country" : "india",
        "first_name": "vaibhav",
        "last_name": "vsvai",
        "shop_name": "bajrang",
        "contact": 9871669115,
        "store_type": "5",
        "shop_no": 123,
        "city": "uttar pradesh",
        "state": "lucknow",
        "locality": "rampur",
        "pincode": 110059,
        "date": "2020-04-05 09:47:29.708532"
      },
      {

        "country" : "india",
        "first_name": "vaibhav",
        "last_name": "hsdsad",
        "shop_name": "seema",
        "contact": 9871669115,
        "store_type": "5",
        "shop_no": 123,
        "city": "bihar",
        "state": "bihar",
        "locality": "shripur",
        "pincode": 110059,
        "date": "2020-04-05 09:47:52.216885"
      },
      {

        "country" : "india",
        "first_name": "manoj",
        "last_name": "kumar",
        "shop_name": "modish",
        "contact": 9987456120,
        "store_type": "6",
        "shop_no": 101,
        "city": "dwarka",
        "state": "delhi",
        "locality": "dwarkamor",
        "pincode": 110059,
        "date": "2020-04-05 16:44:18.165503"
      },
      {

        "country" : "india",
        "first_name": "priya",
        "last_name": "vedi",
        "shop_name": "bedishop",
        "contact": 9871669115,
        "store_type": "4",
        "shop_no": 556,
        "city": "dwarka",
        "state": "new delhi",
        "locality": "bhagwati garden",
        "pincode": 110059,
        "date": "2020-04-05 17:26:08.373028"
      },
      {

        "country" : "india",
        "first_name": "priya",
        "last_name": "vedi",
        "shop_name": "sabkidukan",
        "contact": 7894516325,
        "store_type": "2",
        "shop_no": 556,
        "city": "dwarka",
        "state": "new delhi",
        "locality": "dwarkamor",
        "pincode": 110059,
        "date": "2020-04-05 17:28:12.869757"
      },
      {

        "country" : "swizerland",
        "first_name": "Naman",
        "last_name": "hsdsad",
        "shop_name": "naman shop",
        "contact": 8076890496,
        "store_type": "5",
        "shop_no": 123,
        "city": "dsadsa",
        "state": "uttar pradesh",
        "locality": "dwarkamor",
        "pincode": 110059,
        "date": "2020-04-05 17:37:45.081846"
      },
      {

        "country" : "america",
        "first_name": "abcd",
        "last_name": "efgh",
        "shop_name": "alphabet",
        "contact": 9560381587,
        "store_type": "7",
        "shop_no": 1,
        "city": "delhi",
        "state": "delhi",
        "locality": "delhi",
        "pincode": 110059,
        "date": "2020-04-05 19:56:21.759064"
      },
      {

        "country" : "australia",
        "first_name": "abcd",
        "last_name": "efgh",
        "shop_name": "alphabet",
        "contact": 9560381587,
        "store_type": "7",
        "shop_no": 1,
        "city": "delhi",
        "state": "delhi",
        "locality": "delhi",
        "pincode": 110059,
        "date": "2020-04-05 19:56:21.759064"
      }

];

function createAndBindCountryDropDown(){
    var countries = [] , country;
    for(var i =0;i<shopData.length;i++){
        country = shopData[i].country;
        if(countries.indexOf(country)==-1){
            countries.push(country);
            var option = document.createElement("option");
            option.text = country;
            document.querySelector("select[name='country']").appendChild(option);
        }
    }

}
function createAndBindStateDropDown(){
    var states = [] , state;
    for(var i =0;i<shopData.length;i++){
        state = shopData[i].state;
        if(states.indexOf(state)==-1){
            states.push(state);
            var option = document.createElement("option");
            option.text = state;
            document.querySelector("select[name='state']").appendChild(option);
        }
    }

}
function createAndBindLocalityDropDown(){
    var localities = [] , locality;
    for(var i =0;i<shopData.length;i++){
        locality = shopData[i].locality;
        if(localities.indexOf(locality)==-1){
            localities.push(locality);
            var option = document.createElement("option");
            option.text = locality;
            document.querySelector("select[name='locality']").appendChild(option);
        }
    }

}
createAndBindCountryDropDown();
createAndBindStateDropDown();
createAndBindLocalityDropDown();
document.querySelector(".search").addEventListener("click",showShops);
document.querySelector(".advancedSearch").addEventListener("click",showAdvancedShops);


function showShops(){
    var list , text;
    document.querySelector("ul").innerHTML = "";
    var searchValue = document.querySelector(".searchText").value.toUpperCase();
    var flag = 0;
    for(var i=0;i<shopData.length;i++){
        if( searchValue == shopData[i].first_name.toUpperCase()    || 
            searchValue == shopData[i].last_name.toUpperCase()     || 
            searchValue == shopData[i].shop_name.toUpperCase()     || 
            searchValue == shopData[i].contact                     || 
            searchValue == shopData[i].city.toUpperCase()          ||
            searchValue == shopData[i].state.toUpperCase()         ||
            searchValue == shopData[i].locality.toUpperCase()      ||
            searchValue == shopData[i].pincode                     ||
            searchValue == shopData[i].store_type                  ||
            searchValue == shopData[i].shop_no                     ||
            searchValue == shopData[i].country.toUpperCase()

        ){
            flag = 1;
            list = document.createElement("li");
            text = document.createTextNode(shopData[i].shop_name);
            list.appendChild(text);
            console.log(list);
            document.querySelector("ul").appendChild(list);
        }
    }
    if(flag == 0){
        list = document.createElement("li");
        text = document.createTextNode("No Data Found Please Try Advanced Search");
        list.appendChild(text);
        document.querySelector("ul").appendChild(list);
    }
    var li = document.querySelectorAll("li");
    var length = li.length;
    for(var i=0;i<length;i++){
        li[i].classList.add("list-group-item");
        li[i].addEventListener("click",showMoreInfo);
    }
}

function showAdvancedShops(){
    var flag = 0,list,text;
    document.querySelector("ul").innerHTML = "";
    var countryName = document.querySelector("select[name='country']").value.toUpperCase();
    var stateName = document.querySelector("select[name='state']").value.toUpperCase();
    var localityName = document.querySelector("select[name='locality']").value.toUpperCase();
    var pin = document.querySelector("input[placeholder='PinCode']").value;
    for(var i=0;i<shopData.length;i++){
        var isCountry   = (countryName     == shopData[i].country.toUpperCase());
        var isState     = (stateName       == shopData[i].state.toUpperCase());
        var isLocality  = (localityName    == shopData[i].locality.toUpperCase());
        var isPinCode   = (pin             == shopData[i].pincode);
        if(countryName == ""){
            isCountry = true;
        }
        if(stateName == ""){
            isState = true;
        }
        if(localityName == ""){
            isLocality = true;
        }
        if(pin == ""){
            isPinCode = true;
        }
       
        
        if(isCountry && isState && isLocality && isPinCode){
            flag = 1;
            list = document.createElement("li");
            text = document.createTextNode(shopData[i].shop_name);
            list.appendChild(text);
            document.querySelector("ul").appendChild(list);
        }
    }

    if(flag == 0){
        list = document.createElement("li");
        text = document.createTextNode("No Data Found ");
        list.appendChild(text);
        document.querySelector("ul").appendChild(list);
       
    }
    var li = document.querySelectorAll("li");
    var length = li.length;
    for(var i=0;i<length;i++){
        li[i].classList.add("list-group-item");
        li[i].addEventListener("click",showMoreInfo);
    }
}

function showMoreInfo(){
    var selectedShop = this.innerHTML;
    var info;
    for(var i=0;i<shopData.length;i++){
        if(selectedShop == shopData[i].shop_name){
            info = shopData[i];
        }
    }
    console.log(info);
    var html = "<h5>Shop Name   : "+info.shop_name +"<h5>"+
    "<h5>Country    : "+info.country +"<h5>"+
    "<h5>State    : "+info.state +"<h5>"+
    "<h5>city   : "+info.city +"<h5>"+
    "<h5>locality   : "+info.locality +"<h5>"+
    "<h5>PinCode    : "+info.pincode +"<h5>"+
    "<h5>Shop No    : "+info.shop_no +"<h5>"+
    "<h5>Contact    : "+info.contact +"<h5>"+
    "<h5>Owner Name : "+info.first_name +" "+info.last_name+"<h5>"
    
    ;
    document.querySelector("#info").innerHTML = html;
}