$(function () {
    $.get('/pages/getProducts', function (data) {
        $('#catalog').empty()
        for (let i = 0; i < data; i++) {
            $('#catalog').append(`<div class="col-3">
        <div class="card" style="width: 18rem;height: 200px">
            <div class="card-body">
                <h4 class="card-title">${data[i].name}</h4>
                <p class="card-text"> &#8377;${data[i].price}</p>
                <button type="button" class="btn add" href="#" data-id = "0">
                    <i class="fa fa-cart-plus fa-lg" aria-hidden="true"></i>
                </button>
            </div>
        </div>
    </div>
    `)
        }
    })
})