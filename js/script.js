
$(".question").click(function() {
	$(this).next().slideToggle("slow");
	$(this).children().toggleClass("collapse");
	$("#a2").animate({ opacity: 0.1 }, 4000);
});


// FOR PRACTICE REFERENCE

// // Question and Answer One

// $("#q1").click(function() {
// 	$("#a1").slideToggle("slow");
// 	$("#arrow1-down, #arrow1-up").toggleClass("collapse");	
// })

// // Question and Answer Two

// $("#q2").click(function() {
// 	$("#a2").slideToggle("slow");
// 	$("#arrow2-down, #arrow2-up").toggleClass("collapse");	
// })

// // Question and Answer Three

// $("#q3").click(function() {
// 	$("#a3").slideToggle("slow");
// 	$("#arrow3-down, #arrow3-up").toggleClass("collapse");	
// })