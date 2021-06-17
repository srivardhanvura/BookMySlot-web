const submitBtn = document.getElementById("submitBtn");
const cityName = document.getElementById("cityname");
const city_name = document.getElementById("city_name");
const temp_status = document.getElementById("temp_status");
const temp = document.getElementById("temp");
const datahide = document.querySelector('.middle_layer');

const getInfo = async(event) => {
    event.preventDefault();
    let cityVal = cityName.value;

    if(cityVal == ""){
        city_name.innerText = `Enter a state name`;
        datahide.classList.add('data_hide');
    }
     else {
        try{
            let url = `https://covid-india-cases.herokuapp.com/states/`
            const response = await fetch(url);
            const data = await response.json();
            const arrData = [data];
            console.log(arrData[0][0].active);
            if(cityVal == "Andaman and Nicobar Islands" ){
                si= 0;
            }
            if(cityVal == "Andhra Pradesh" ){
                si= 1;
            }
            if(cityVal == "Arunachal Pradesh" ){
                si= 2;
            }
            if(cityVal == "Assam" ){
                si= 3;
            }
            if(cityVal == "Bihar" ){
                si= 4;
            }
            if(cityVal == "Chandigarh" ){
                si= 5;
            }
            if(cityVal == "Chhattisgarh" ){
                si= 6;
            }
            if(cityVal == "Dadra and Nagar Haveli and Daman and Diu" ){
                si= 7;
            }
            if(cityVal == "Delhi" ){
                si= 8;
            }
            if(cityVal == "Goa" ){
                si= 9;
            }
            if(cityVal == "Gujarat" ){
                si= 10;
            }
            if(cityVal == "Haryana" ){
                si= 11;
            }
            if(cityVal == "Himachal Pradesh" ){
                si= 12;
            }
            if(cityVal == "Jammu and Kashmir" ){
                si= 13;
            }
            if(cityVal == "Jharkhand" ){
                si= 14;
            }
            if(cityVal == "Karnataka" ){
                si= 15;
            }
            if(cityVal == "Kerala" ){
                si= 16;
            }
            if(cityVal == "Ladakh" ){
                si= 17;
            }
            if(cityVal == "Lakshadweep" ){
                si= 18;
            }
            if(cityVal == "Madhya Pradesh" ){
                si= 19;
            }
            if(cityVal == "Maharashtra" ){
                si= 20;
            }
            if(cityVal == "Manipur" ){
                si= 21;
            }
            if(cityVal == "Meghalaya" ){
                si= 22;
            }
            if(cityVal == "Mizoram" ){
                si= 23;
            }
            if(cityVal == "Nagaland" ){
                si= 24;
            }
            if(cityVal == "Odisha" ){
                si= 25;
            }
            if(cityVal == "Puducherry" ){
                si= 26;
            }
            if(cityVal == "Punjab" ){
                si= 27;
            }
            if(cityVal == "Rajasthan" ){
                si= 28;
            }
            if(cityVal == "Sikkim" ){
                si= 29;
            }
            if(cityVal == "Tamil Nadu" ){
                si= 30;
            }
            if(cityVal == "Telangana" ){
                si= 31;
            }
            if(cityVal == "Tripura" ){
                si= 32;
            }
            if(cityVal == "Uttar Pradesh" ){
                si= 33;
            }
            if(cityVal == "Uttarakhand" ){
                si= 34;
            }
            if(cityVal == "West Bengal" ){
                si= 35;
            }




            city_name.innerText = `Total Number of Cases - ${arrData[0][si].noOfCases}`;
            temp.innerText = `Total number of Active cases - ${arrData[0][si].active}`;
            temp1.innerText = `Total number of Cured - ${arrData[0][si].cured}`;
            temp2.innerText = `Total number of Deaths - ${arrData[0][si].deaths}`;
            datahide.classList.remove('data_hide');

            }
    
        catch{
            city_name.innerText = `Please enter a valid state name`;
            datahide.classList.add('data_hide');
            }   
    }

} 
submitBtn.addEventListener('click', getInfo);