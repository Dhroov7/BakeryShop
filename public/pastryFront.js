$(function () {
    $.get('/pages/getpastry', function (data) {
        $('#catalog').empty()
        for (let i = 0; i < data.length; i++) {
            console.log(data[i].name + " " + data[i].price)
            $('#catalog').append(`<div class="card" style="width: 18rem;margin-right: 10px;margin-bottom: 20px">
    <img class="card-img-top" src="/images/sandwich.jpg">
    <div class="card-body">
        <h5 class="card-title">${data[i].name}</h5>
        <p class="card-text">&#8377;${data[i].price}</p>
        <button type="button" href="#" class="btn add" data-id = "${data[i].id}">
            <i class="fa fa-cart-plus fa-lg" aria-hidden="true"></i>
        </button>
    </div>
</div>
    `)
        }
    })

    $('.add').click(function (ele) {
        let btnId = +(ele.target.getAttribute("data-id"));
        $.post('/pages/cart',{id:btnId})
    })
})