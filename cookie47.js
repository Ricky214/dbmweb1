<script type="text/javascript">
$(function(){
     $('#cookie_stop').click(function(){
        $('#cookie_disclaimer').slideUp();

        var nDays = 999;
        var cookieName = "disclaimer";
        var cookieValue = "true";

        var today = new Date();
        var expire = new Date();
        expire.setTime(today.getTime() + 3600000*24*nDays);
        document.cookie = cookieName+"="+escape(cookieValue)+";expires="+expire.toGMTString()+";path=/";
     });

});

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
</script>