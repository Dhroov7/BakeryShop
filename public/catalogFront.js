$(function () {
    $.get('/pages/getProducts', function (data) {
        $('#catalog').empty()
        // console.log(typeof data)
        for (let i = 0; i < data.length; i++) {
            console.log(data[i].name + " " + data[i].price)
            $('#catalog').append(`<div class="card" style="width: 18rem;margin-right: 10px;margin-bottom: 20px">
    <img class="card-img-top" src="/images/sandwich.jpg">
    <div class="card-body">
        <h5 class="card-title">Product Name</h5>
        <p class="card-text">Product Price</p>
        <a href="#" class="btn">
            <i class="fa fa-cart-plus fa-lg" aria-hidden="true"></i>
        </a>
    </div>
</div>
    `)
        }
    })
})