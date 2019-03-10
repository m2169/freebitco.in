bconfig = {
maxBet: 0.00005551,
wait: 600,
toggleHilo:false
};
hilo = 'hi';
multiplier = 2;
rollDice = function() {
if ($('#double_your_btc_bet_lose').html() !== '') {
$('#double_your_btc_2x').click();
multiplier++;
if(bconfig.toggleHilo)toggleHiLo();
} else {
$('#double_your_btc_min').click();
multiplier = 2;
}
if (parseFloat($('#balance').html()) < (parseFloat($('#double_your_btc_stake').val()) * 2) ||
parseFloat($('#double_your_btc_stake').val()) > bconfig.maxBet) {
$('#double_your_btc_min').click();
}
$('#double_your_btc_bet_' + hilo + '_button').click();
setTimeout(rollDice, (multiplier * bconfig.wait) + Math.round(Math.random() * 100));
};
toggleHiLo = function() {
if (hilo === 'hi') {
hilo = 'hi';
} else {
hilo = 'hi';
}
};
rollDice();
