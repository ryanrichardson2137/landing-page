$(document).ready(function(){
    $('#update').on('click', function(){
        var price = 90;
        var quantity = $('tbody input').val();
        var total = price * quantity;
        $('#total1').text('$' + total + '.00');
        $('#total2').text(total + '.00');
    })
})