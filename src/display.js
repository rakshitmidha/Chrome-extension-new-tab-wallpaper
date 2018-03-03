(function () {
    var qoute = [
        "They don't want us to win.",
        "Egg whites, turkey sausage, wheat toast, water. Of course they don't want us to eat our breakfast, so we are going to enjoy our breakfast.",
        "You smart, you loyal, you a genius.",
        "Congratulations, you played yourself.",
        "The key to more success is to have a lot of pillows.",
        "Life is what you make it, so let's make it.",
        "They key is to have every key, the key to open every door.",
        "Learning is cool, but knowing is better, and I know the key to success."
    ];

    var images = [
        "assets/images/1.jpg",
        "assets/images/2.jpg"        
    ];

    function chooseOne(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    }

    window.onload = function() {
        var randomImage = chooseOne(images);
        var randomQoute = chooseOne(qoute);

        document.getElementById('background-image')
        .style.backgroundImage = 'url("'+randomImage+'")' ;
        document.getElementById('qoute').innerHTML = randomQoute;
        document.getElementById('author').innerHTML = "Rakshit Midha";
        document.getElementById('qoute').className = 'move';
        document.getElementById('author').className = 'move';
    };
})();