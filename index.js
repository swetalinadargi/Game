let initialvalue = 100;
    function generate_Random_No(max) {
        return Math.floor((Math.random() * 100) + 1);
    }
    let random = generate_Random_No(100);
    let chances = document.getElementById("chances");
    chances.innerText = initialvalue;

    function CheckValue() {
        console.log(random);
        let current_no = document.getElementById("guessno").value;

        let guess_msg = document.querySelector('.guess_msg');


        if (current_no > random) {

            guess_msg.textContent = "Your Guess is too High";
            initialvalue--;
            chances.innerText = initialvalue;
        }
        else if (current_no < random) {
            guess_msg.innerText = "Your Guess is too Low";
            initialvalue--;
            chances.innerText = initialvalue;
        }
        else {
            guess_msg.innerText = "🤩🤩 Hurray You Won 🤩🤩";
            initialvalue--;
            chances.innerText = initialvalue;

            let highScore = document.getElementById("highScore");
            highScore.innerText = initialvalue;

            document.getElementsByClassName("no")[0].innerText = current_no;
            document.getElementById("check").style.display = "none";
            document.body.style.background = "green";
        }
    }


    function playAgain() {
        document.getElementById("playAgain")
        document.getElementById("guessno").value = "";
        let guess_msg = document.querySelector('.guess_msg');
        guess_msg.innerText = "Start guessing...";
        chances.innerText =100;
        document.getElementsByClassName("no")[0].innerText="?";
        document.getElementById("highScore").innerText = 0;
    }