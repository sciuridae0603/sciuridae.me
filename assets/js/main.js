
$(document).ready(function() {
    $('#fullpage').fullpage({
        css3: true,
		scrollingSpeed: 700,
		autoScrolling: true,
		fitToSection: true,
		fitToSectionDelay: 1000,
		scrollBar: false,
		easing: 'easeInOutCubic',
		easingcss3: 'ease',
		loopBottom: false,
		loopTop: false,
		loopHorizontal: true,
		continuousVertical: false,
		continuousHorizontal: false,
		scrollHorizontally: false,
		interlockedSlides: false,
		dragAndMove: false,
		offsetSections: false,
		resetSliders: false,
		fadingEffect: false,
		normalScrollElements: '#element1, .element2',
		scrollOverflow: false,
		scrollOverflowReset: false,
		scrollOverflowOptions: null,
		touchSensitivity: 15,
		normalScrollElementTouchThreshold: 5,
		bigSectionsDestination: null,
		afterLoad: function(anchorLink, index){
            if(index == 2){
                document.getElementById("python").style.width = "60%";
                document.getElementById("php").style.width = "40%";
                document.getElementById("server").style.width = "60%";
                document.getElementById("htmljscss").style.width = "20%";
                document.getElementById("python_text").innerHTML = "不到精通但還可以!";
                document.getElementById("php_text").innerHTML = "也是不到精通但還可以!";
                document.getElementById("server_text").innerHTML = "常常摸(?";
                document.getElementById("htmljscss_text").innerHTML = "就像這樣";
            }
        }
	});     
});

cheet("↑ ↓ ← →", function() {
    $('body').css('transform', 'rotate(360deg)');
    setTimeout(function(){$('body').css('transform', 'rotate(720deg)');},3000);

});