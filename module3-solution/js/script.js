$(function() {
    var myConvertNumber = function(event) {
        this.value = this.value.replace(/\D/g, '');
        this.value = Number(this.value).toLocaleString("en");
        console.log(this.value);
    }
    $("#my-input-id").keyup(myConvertNumber);
    $("#my-input2-id").keyup(myConvertNumber);



});