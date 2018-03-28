$(function () {
    $.get('/pages/getpastry', function (data) {
        $('#catalog').empty()
        for (let i = 0; i < data.length; i++) {
            console.log(data[i].name + " " + data[i].price)
            $('#catalog').append(`<div class="card" style="width: 18rem;margin-right: 10px;margin-bottom: 20px">
    <img class="card-img-top" src="/images/sandwich.jpg">
    <div class="card-body">
        <h5 class="card-title">${data[i].name}</h5>
        <p class="card-text">${data[i].price}</p>
        <a href="#" class="btn">
            <i class="fa fa-cart-plus fa-lg" aria-hidden="true"></i>
        </a>
    </div>
</div>
    `)
        }
    })
})