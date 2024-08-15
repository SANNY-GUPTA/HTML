let products=[
                {
                    id:101,
                    img:"https://5.imimg.com/data5/ANDROID/Default/2020/8/YO/GL/HR/111346107/product-jpeg.jpg",
                    name:"US POLO",
                    price:2499,
                    qty:1
                },
                {
                    id:102,
                    img:"https://assets.ajio.com/medias/sys_master/root/20230415/ZU8n/6439f0b0907deb497ae7a4d7/-473Wx593H-466060513-black-MODEL.jpg",
                    name:"Puma Shoe",
                    price:3499,
                    qty:1,
                },
                {
                    id:103,
                    img:"https://i.dell.com/is/image/DellContent//content/dam/ss2/product-images/dell-client-products/notebooks/latitude-notebooks/14-3420/media-gallery/peripherals_laptop_latitude_3420nt_gallery_1.psd?fmt=pjpg&pscan=auto&scl=1&wid=3319&hei=2405&qlt=100,1&resMode=sharp2&size=3319,2405&chrss=full&imwidth=5000",
                    name:"Dell Laptop",
                    price:34499,
                    qty:1,
                },
                {
                    id:104,
                    img:"https://tiimg.tistatic.com/fp/1/007/574/vivo-mobile-phone-7-38mm-ultra-smooth-body-170g-light-2-5d-adjusted-outline-for-a-great-hold-703.jpg",
                    name:"Vivo Mobile",
                    price:12499,
                    qty:1,
                },
                
             ];


//Display Products

function displayProducts(items)
{
    if(items.length>=1)
    {
        let eachItem=``;
        for(let item of items)
        {
            eachItem+=`<div class="col-md-3">
            <div class="card">
                <div class="card-header">
                    <img src="${item.img}" alt="" class="img-fluid">
                </div>
                <div class="card-body text-center">
                    <h3>${item.name}</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <h6>${item.price}&#8377;</h6>
                    <i class="fa fa-minus-circle"></i>
                    <span id="qty">${item.qty}</span>
                    <i class="fa fa-plus-circle" onclick="incQty(${item.id})"></i><br>
                    <small style="color:limegreen;">
                        Stock Is Available
                    </small>
                </div>
            </div>
        </div>`;
        }
        document.getElementById('display').innerHTML=eachItem;
    }
}
displayProducts(products);



function incQty(id)
{
    let items=products.map((item)=>
    {
        if(item.id==id)
        {
            return{...item,qty:++item.qty};
        }
        else
        {
            return item;
        }
    });
    displayProducts(items);
}