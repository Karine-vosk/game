<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>game_flip</title>
    <link href="https://fonts.googleapis.com/css?family=Chicle|Indie+Flower|Yatra+One" rel="stylesheet">
    <link rel="icon" href="images/icon/Pacman.icon"/>
    <link rel="stylesheet" href="css/game.css"/>
    <link rel="stylesheet" href="css/web-fonts-with-css/css/fontawesome-all.css"/>
</head>
<body>


	<div id="all_content">

	
		<div id="header">
		
			<h1>memory game</h1>

		</div>

		<div id="score_panel">

		
			<span class="moves move"> 0</span>
            <span class="move">move(s)</span>
			
			<span class="time"> 0 mins 0 secs</span>

            <span class="start">

                <i class="far fa-play-circle"></i>

            </span>

            <span class="restart">

                <i class="fas fa-redo"></i>

            </span>

		</div>

        <div class="cont_game">

                         <!--CARD ONE-->

                <div class="card">

                    <div class="front_card"></div>

                    <div class="back_card">

                        <i class=""></i>

                    </div>

                </div>

                         <!--CARD TWO-->

            <div class="card">

                <div class="front_card"></div>

                <div class="back_card">

                    <i class=""></i>

                </div>

            </div>

                    <!--CARD THREE-->

            <div class="card">

                <div class="front_card"></div>

                <div class="back_card">

                    <i class=""></i>

                </div>

            </div>

                        <!--CARDS FOUR-->

            <div class="card">

                <div class="front_card"></div>

                <div class="back_card">

                    <i class=""></i>

                </div>

            </div>

                    <!--CARDS FIVE-->

            <div class="card">

                <div class="front_card"></div>

                <div class="back_card">

                    <i class=""></i>

                </div>

            </div>

                        <!--CARDS SIX-->

            <div class="card">

                <div class="front_card"></div>

                <div class="back_card">

                    <i class=""></i>

                </div>

            </div>

                        <!--CARDS SEVEN-->

            <div class="card">

                <div class="front_card"></div>

                <div class="back_card">

                    <i class=""></i>

                </div>

            </div>

                      <!--CARDS EIGHT-->

            <div class="card">

                <div class="front_card"></div>

                <div class="back_card">

                    <i class=""></i>

                </div>

            </div>

                      <!--CARDS NINE-->

            <div class="card">

                <div class="front_card"></div>

                <div class="back_card">

                    <i class=""></i>

                </div>

            </div>

                      <!--CARDS TEN-->

            <div class="card">

                <div class="front_card"></div>

                <div class="back_card">

                    <i class=""></i>

                </div>

            </div>

                      <!--CARDS ELEVEN-->

            <div class="card">

                <div class="front_card"></div>

                <div class="back_card" id ='eleven'>

                    <i class=""></i>

                </div>

            </div>

                         <!--CARDS 12-->

            <div class="card">

                <div class="front_card"></div>

                <div class="back_card">

                    <i class=""></i>

                </div>

            </div>

                 <!--CARDS 13-->


            <div class="card">

                <div class="front_card"></div>

                <div class="back_card">

                    <i class=""></i>

                </div>

            </div>

                        <!--CARDS 14-->

            <div class="card">

                <div class="front_card"></div>

                <div class="back_card">

                    <i class=""></i>

                </div>

            </div>

                     <!--CARDS 15-->

            <div class="card">

                <div class="front_card"></div>

                <div class="back_card">

                    <i class=""></i>

                </div>

            </div>

                    <!--CARDS 16-->

            <div class="card">

                <div class="front_card"></div>

                <div class="back_card">

                    <i class=""></i>

                </div>

            </div>

        </div>

	</div>

    <div id="on_popup">

        <div class="popup">

            <img src="images/congrate.jpg" alt="congrate">

            <span id="close" class="close">

                <i class="fas fa-times"></i>

            </span>

            <p>Congratulations you're a winner!!!</p>

            <div class="content">

                <p>
                    You made
                    <span id="final_move"></span>
                    moves
                </p>

                <p>
                    in
                    <span class="total_time"></span>

                </p>

            </div>

            <button id="button" type="button" class="close">

                Play again!!

            </button>

        </div>

    </div>
	
	<input id='ip_button' type='button'  value='my id address'>
	<div id='mi_id'></div>
    <script src="js/jquery-3.2.1.js"></script>
    <script src="js/game.js"></script>
</body>
</html>