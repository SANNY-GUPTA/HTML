let getBtn = document.getElementById('get-data');
getBtn.addEventListener('click', getCountryData);

//Fetch data from local server
function getCountryData(country) {
    //1.Create XMLHttpRequest Object

    let xhr = new XMLHttpRequest();

    //2.Create A Request

    xhr.open('GET', `https://restcountries.com/v3.1/name/${country}`, true);

    //3.Send Request
    xhr.send();
    xhr.addEventListener('load', function () {
        let data = JSON.parse(xhr.responseText);
        console.log(data)
    })

    let eachCountry = ``;
    data.forEach(function (item) {
        eachCountry += `<div class="col-md-3">
            <div class="card">
                <div class="card-header">
                    <img src="${item.img}" alt="" class="img-fluid">
                </div>
                <div class="card-body text-center">
                    <h3>${item.name}</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <h6>${item.name.comman}&#8377;</h6>  
                    <i class="fa fa-minus-circle onclick=decQty(${item.id})"></i>
                    <span id="qty">${item.capital[0]}</span> 
                    <i class="fa fa-plus-circle" onclick="incQty(${item.id})"></i><br>
                    <small style="color:limegreen;">
                        Stock Is Available
                    </small>
                </div>
            </div>
        </div>`;
    });


    document.getElementById('display').innerAdjacentHTML('beforeend', eachCountry);
}
