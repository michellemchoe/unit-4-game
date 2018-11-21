$(document).ready(function () {
    mining = function () {
        var winCounter = 0;
        var lossCounter = 0;
        var colCrystal = 0;
        var reqCrystal = 0;
        var isWin;

        function newRound() {
            reqCrystal = Math.floor((Math.random() * 102) + 19);
            colCrystal = 0;
            var isWin = false;
            $("#crystalRequested").text("");
            $("#crystalsCollected").text("");
            $("#crystalRequested").append("&nbsp;" + reqCrystal);
            $("#crys1").val(Math.floor((Math.random() * 12) + 1));
            $("#crys2").val(Math.floor((Math.random() * 12) + 1));
            $("#crys3").val(Math.floor((Math.random() * 12) + 1));
            $("#crys4").val(Math.floor((Math.random() * 12) + 1));
        }

        newRound();

        $(".crystal").click(function () {
            var crystalVal = $(this).val();
            colCrystal += parseInt(crystalVal);
            $("#crystalsCollected").text(colCrystal);
            $("#crystalsCollected").prepend("&nbsp;")
            // endRound(checkAnswer());
            checkAnswer();
        });

        function checkAnswer() {
            if (reqCrystal === colCrystal) {
                winCounter++;
                $("#winCount").text(winCounter);
                isWin = true;
                setTimeout(function(){
                    alert("noice");
                    newRound();
                },0)

                return true;
            }
            else if (reqCrystal < colCrystal) {
                lossCounter++;
                $("#lossCount").text(lossCounter);
                isWin = false;
                setTimeout(function(){
                    alert("yikes");
                    newRound();
                },0)
            
                
                return true;
            } 
           
            return false;
        }

        // function endRound(isOver){
        //     if (isWin && isOver) {
        //         alert("noice");
        //         newRound();
        //     }
        //     else if (!isWin && isOver) {
        //         alert("yikes");
        //         newRound();
        //     }
        // }



    };

    mining();

});

