let getBtn=document.getElementById('get-data');
getBtn.addEventListener('click',getData);

//Fetch data from local server
function getData()
{
    //1.Create XMLHttpRequest Object

    let xhr=new XMLHttpRequest();

    //2.Create A Request

    xhr.open('GET','products.json',true);

    //3.Send Request
    xhr.send();


    //If we send request, to get response it will take some time

    xhr.onprogress=function()
    {
        let display=document.getElementById('display-loading');
        display.innerText="Data Loading..........";
    }

    //4.Once Response Is Loaded

    xhr.onload=function()
    {
        let products=JSON.parse(xhr.responseText);
        let {productsArray}=products;

        let eachProduct=``;
        productsArray.forEach(function(item)
        {
            eachProduct+=`<div class="col-md-3">
            <div class="card">
                <div class="card-header">
                    <img src="${item.img}" alt="" class="img-fluid">
                </div>
                <div class="card-body text-center">
                    <h3>${item.name}</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <h6>${item.price}&#8377;</h6>  //item.name.comman
                    <i class="fa fa-minus-circle onclick=decQty(${item.id})"></i>
                    <span id="qty">${item.qty}</span> // item.capital[0] item.population/1000 item.currencicies.INR.name
                    <i class="fa fa-plus-circle" onclick="incQty(${item.id})"></i><br>
                    <small style="color:limegreen;">
                        Stock Is Available
                    </small>
                </div>
            </div>
        </div>`;
        });

        
        document.getElementById('display').innerHTML=eachProduct; 
    }

}