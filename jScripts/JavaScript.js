$(document).ready(function () {

    $('#startBtn').hide();

    $("#introForMe").click(function () {
        $('.titleIntro').html("מצויין!");
        $('.introCol').hide();
        $('#qInstQ').html("תוכנית &nbsp;<img src='images/bishviliLogo.png' width='50' height='30'/> &nbsp;פועלת במרכזי צעירים למען קידום יעדיהם האישיים של צעירים וצעירות הזקוקים לליווי והכוונה לקראת יציאה לחיים עצמאיים מיטיבים.<br/><div id='linkToSiteFromQ'><a href='aboutUs.html'>למידע נוסף לחץ כאן</a></div><br/> יצרנו עבורך שאלון קצר על מנת שנוכל להכווין אותך בצורה הטובה ביותר! <br/> ככל שתענה\\י על השאלות בצורה כנה יותר, כך תיחשף\\י לתוכן הרלוונטי ביותר עבורך!");
        $('#startBtn').show();

    });

});