//global variables

// variable used to select users character
var playersChoice = false;

//variable used to select character they wish to fight
var enemyChoice; 

// Naruto's stats
var naruto = {
	hp: 180,
	attack: 6,
	counter: 28, 
};
// Sasuke's stats
var sasuke = {
	hp: 125,
	attack: 5,
	counter: 19, 
};
//  Jirariya's stats
var jirariya = {
	hp: 200, 
	attack: 5, 
	counter: 17, 
};
//  Kakashi's stats
var kakashi = {
	hp: 160, 
	attack: 9, 
	counter: 29, 
};

// on.click functions for each character in order to pick the players character and move the others into the defender spot
// When Naruto is the Attacker

$('.naru').click(function() {

	if (!playersChoice) {
		$('.playersChoice').append($('.naru'));

	// Move other characters to enemies station
		$('.enemies').append($('.kaka'));
		$('.enemies').append($('.sasu'));
		$('.enemies').append($('.jira')); 
		playersChoice = naruto;
	}

	// move Kakashi
	$('.kaka').click(function() {
		$('.choiceToAttack').append($('.kaka'));
		enemyChoice = kakashi; 
	$('.hpEnemyChoice').html(enemyChoice.hp);
	});

	// move Sasuke
	$('.sasu').click(function() {
		$('.choiceToAttack').append($('.sasu'));
		enemyChoice = sasuke;
	$('.hpEnemyChoice').html(enemyChoice.hp);
	});

	// move Jirarya
	$('.jira').click(function() {
		$('.choiceToAttack').append($('.jira'));
		enemyChoice = jirariya;
	$('.hpEnemyChoice').html(enemyChoice.hp);
	});	
});

//	Sasuke is the attacker 
$('.sasu').click(function() {

	if (!playersChoice) {
		$('.playersChoice').append($('.sasu'));
	
// Move other characters to enemies station
		$('.enemies').append($('.naru'));
		$('.enemies').append($('.jira'));
		$('.enemies').append($('.kaka'));
		playersChoice = sasuke;
	}
	
// move enemies to choiceToAttack div on screen
	// will move the other characters to the enemies station
	$('.naru').click(function() {
		$('.choiceToAttack').append($('.naru'));
		enemyChoice = naruto; 
   		$('.hpEnemyChoice').html(enemyChoice.hp);
	});

	// will move Jirariya
	$('.jira').click(function() {
		$('.choiceToAttack').append($('.jira'));
		enemyChoice = jirariya;
		$('.hpEnemyChoice').html(enemyChoice.hp);
	});

	// will move Kakashi
	$('.kaka').click(function() {
		$('.choiceToAttack').append($('.kaka'));
		enemyChoice = kakashi;
		$('.hpEnemyChoice').html(enemyChoice.hp);
	});	
});

// Kakashi is the Attacker
$('.kaka').click(function() {

	if (!playersChoice) {
		$('.playersChoice').append($('.kaka'));

// Move other characters to enemies station
		$('.enemies').append($('.naru'));
		$('.enemies').append($('.sasu'));
		$('.enemies').append($('.jira'));
		playersChoice = kakashi;
	}

// move enemies to choiceToAttack div on screen
	// will move Naruto
	$('.naru').click(function() {
		$('.choiceToAttack').append($('.naru'));
		enemyChoice = Naruto; 
		$('.hpEnemyChoice').html(enemyChoice.hp);
	});

	// will move Sasuke
	$('.sasu').click(function() {
		$('.choiceToAttack').append($('.sasu'));
		enemyChoice = sasuke;
		$('.hpEnemyChoice').html(enemyChoice.hp);
	});

	// will move jirariya
	$('.jira').click(function() {
		$('.choiceToAttack').append($('.jira'));
		enemyChoice = jirariya;
		$('.hpEnemyChoice').html(enemyChoice.hp);
	});	
});

// Jirariya as First Player
$('.jira').click(function() {

	if (!playersChoice) {
		$('.playersChoice').append($('.jira'));

// Move other characters to enemies station
		$('.enemies').append($('.naru'));
		$('.enemies').append($('.sasuke'));
		$('.enemies').append($('.kaka'));
		playersChoice = jirariya;
	}

// move enemies to choiceToAttack div on screen
	// will move Naruto
	$('.naru').click(function() {
		$('.choiceToAttack').append($('.naru'));
		enemyChoice = naruto; 
		$('.hpEnemyChoice').html(enemyChoice.hp);
	});

	// will move Sasuke
	$('.sasu').click(function() {
		$('.choiceToAttack').append($('.sasu'));
		enemyChoice = sasuke;
		$('.hpEnemyChoice').html(enemyChoice.hp);
	});

	// will move kakashi
	$('.kaka').click(function() {
		$('.choiceToAttack').append($('.kaka'));
		enemyChoice = kakashi;
		$('.hpEnemyChoice').html(enemyChoice.hp);
	});	
});	

// Attack function
$('.attackButton').click(function() {
	//Loses HP from defender when the "attack" button is clicked
   	enemyChoice.hp -= playersChoice.attack; 
   	
   	//Attacker continually increases its damage each time attack button is clicked
 	playersChoice.attack += playersChoice.attack;
 	
 	//takes hp away from Attker because the defender does a counter attack when the attack button is clicked
    playersChoice.hp -= enemyChoice.counter;
    
    //Show the hp for the first and second players on the webpage
    $('.hpPlayersChoice').html(playersChoice.hp);
    $('.hpEnemyChoice').html(enemyChoice.hp);

// Naruto get removed from defender box if he is second player and has an hp of 0 and below
    	if (enemyChoice == naruto && enemyChoice.hp <= 0){
    		$('.naru').remove();
    	}
// Sasuke get removed from defender box if he is second player and has an hp of 0 and below
    	else if (enemyChoice == sasuke && enemyChoice.hp <= 0){
    		$('.sasu').remove(); 
    	}
// Kakashi get removed from defender box if he is second player and has an hp of 0 and below
    	else if (enemyChoice == kakashi && enemyChoice.hp <= 0){
    		$('.kaka').remove();
   		}
// Jirariya get removed from defender box if he is second player and has an hp of 0 and below
    	else if (enemyChoice == voldemort && enemyChoice.hp <= 0){
    		$('.jira').remove();
   		}
// If the Attaker's hp goes to or passes 0 the screen appears with You Lose!
   		if (playersChoice.hp <= 0){
   			alert("You were to weak to defeat your enemy. Try Again!");
   			//automatically resets page when the player loses
   			window.location.href = window.location.href;
   		}
});