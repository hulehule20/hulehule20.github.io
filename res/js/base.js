$(document).ready(function(){

	putColor($("span.special"));

	setTimeout(function(){
		$("#subheading").fadeIn("slow")
	}, 1500)

	setTimeout(function(){
			$("#contact").fadeIn();
			$(".mail").css('visibility','visible').hide().fadeIn('slow', function(){
				setTimeout(function(){
					$(".github").css('visibility','visible').hide().fadeIn('slow', function(){
						setTimeout(function(){
							$(".name").css('visibility','visible').hide().fadeIn('slow', function(){
									setTimeout(function(){
										$(".username").css('visibility','visible').hide().fadeIn('slow', function(){
											setTimeout(function(){
												$("#goBt").css('visibility', 'visible').hide().fadeIn('slow');
											}, 500);
										});
								}, 500)
							});
						}, 500)
					});
				}, 500);
			});
		}, 2500);

	$(".htext").hover(function(e){
		$(this).fadeOut(500, function() {
        	$(this).text('Hello').fadeIn(500);
    	});
	}, function(e){
		$(this).fadeOut(500, function() {
        	$(this).text('Hola').fadeIn(500);
    	});
	});

	$('html, body').scroll(function(e) {
         e.preventDefault();
    });

});


function putColor(e) {
	var CSS_COLOR_NAMES = ["Aqua","Aquamarine","Black","Blue","BlueViolet","Brown","BurlyWood","CadetBlue","Chartreuse","Chocolate","Coral","CornflowerBlue","Crimson","Cyan","DarkBlue","DarkCyan","DarkGoldenRod","DarkGray","DarkGrey","DarkGreen","DarkKhaki","DarkMagenta","DarkOliveGreen","Darkorange","DarkOrchid","DarkRed","DarkSalmon","DarkSeaGreen","DarkSlateBlue","DarkSlateGray","DarkSlateGrey","DarkTurquoise","DarkViolet","DeepPink","DeepSkyBlue","DimGray","DimGrey","DodgerBlue","FireBrick","ForestGreen","Fuchsia","Gold","GoldenRod","Gray","Grey","Green","GreenYellow","HotPink","IndianRed","Indigo","Khaki","LawnGreen","LightGreen","LightSeaGreen","LightBlue","LightSlateGray","LightSlateGrey","LightSteelBlue","Lime","LimeGreen","Magenta","Maroon","MediumAquaMarine","MediumBlue","MediumOrchid","MediumPurple","MediumSeaGreen","MediumSlateBlue","MediumSpringGreen","MediumTurquoise","MediumVioletRed","MidnightBlue","Navy","Olive","OliveDrab","Orange","OrangeRed","Orchid","PaleGreen","PaleTurquoise","PaleVioletRed","PeachPuff","Peru","Plum","PowderBlue","Purple","Red","RosyBrown","RoyalBlue","SaddleBrown","Salmon","SandyBrown","SeaGreen","Sienna","SkyBlue","SlateBlue","SlateGray","SlateGrey","SpringGreen","SteelBlue","Tan","Teal","Thistle","Tomato","Turquoise","Violet","YellowGreen"];

	e.each(function(){
		color = CSS_COLOR_NAMES[Math.floor(Math.random()*CSS_COLOR_NAMES.length)];
		$(this).css("color", color)
	})
}