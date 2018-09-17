$(document).ready(function(){
$('input[type="checkbox"]').click(function() {
    
     if ($('input[type="checkbox"]:checked').length > 0) {
        $('.card').hide();
        $('input[type="checkbox"]' && 'input[class="1"]:checked').each(function() {
            var idk=this.id;
            $('.'+idk).show();
        if($('input[type="checkbox"]' && 'input[class="1"]:checked').length==0) {$('.card').show();}
        $('input[type="checkbox"]' && 'input[class="2"]:not(:checked)').each(function() {
        var idk=this.id;
        $('.'+idk).hide();
        if($('input[type="checkbox"]' && 'input[class="2"]:checked').length==0) {wow()}
    //         $('#main-div[class=' + this.id + ']').show();
    //     });
    // } else { 
    //     $('#main-div').show();
        });
     });}
     if ($('input[type="checkbox"]:checked').length == 0) {reset()};
});
});
function wow(){
    $('.card').show();
    if ($('input[type="checkbox"]:checked').length > 0) {
        $('.card').hide();
        $('input[type="checkbox"]' && 'input[class="1"]:checked').each(function() {
            var idk=this.id;
            $('.'+idk).show();
});
    }
}
function reset() {
    $('input[type="checkbox"]').each(function() {
        this.checked=false;
        $('.card').show();
});
}
