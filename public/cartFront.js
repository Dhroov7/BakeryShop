$(function () {

    let total = 0;

    function refreshcart(data) {
        $("#cartList").empty();
        $("#cartTotal").empty();
        for (let i = 0; i < data.length; i++) {
            $("#cartList").append(`
            <li class="list-group-item">
        <div class="row">
            <div class="col-9">
                ${data[i].name}
            </div>
            <div class="col-3">
             &#8377;${data[i].price}
            </div>
        </div>
    </li>`)
            total += data[i].price
        }

        $("#cartTotal").append(` <li class="list-group-item">
        <div class="row">
            <div class="col-9">
                Total:
            </div>
            <div class="col-3">
                &#8377;${total}
            </div>
        </div>
    </li>
        `)
    }

    $.get('/pages/getcart', function (data) {
        refreshcart(data)
    })
})