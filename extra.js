$(() => {
    //@ coding: SISUBENY
    //@ jquery: 3.6.0

    const clickAfterStyle = $('<style></style>');
    const clickBeforeStyle = $('<style></style>');
    clickBeforeStyle.appendTo($(document.head));
    clickAfterStyle.appendTo($(document.head));
    displayThemeSeletor = function () {
        $('#btn_group,#desc').css('display', 'none')
        $('#theme').css('display', 'block')
    }
    setClickAt = (n) => {
        // parms include exten
        clickAfterStyle.html(`
        .tt1, .tt2, .tt3, .tt4, .tt5 {
          background-size: auto 86%;
          background-image: url(./image/${n});
    }`);
    }
    setClickBe = (m) => {
        clickBeforeStyle.html(`
        .t1, .t2, .t3, .t4, .t5 {
           background-size: auto 100%;
           background-image: url(./image/${m});
    }`);
    }
    setTheme = function (them_no) {
        if (them_no == 1) {
            setClickAt(`Theme${them_no}AfterClicked.png`);
            setClickBe(`Theme${them_no}BeforeClicked.png`);
        }


        else if (them_no == 2) {
            setClickAt(`Theme${them_no}AfterClicked.png`);
            setClickBe(`Theme${them_no}BeforeClicked.png`);
        }


        else if (them_no == 3) {
            setClickAt(`Theme${them_no}AfterClicked.png`);
            setClickBe(`Theme${them_no}BeforeClicked.png`);
        }
        
        else {
            console.log("er")
        }




    }
    removeTheme = function () {
        $('#btn_group,#desc').css('display', 'block');
        $('#theme').css('display', 'none');
    }
}
);