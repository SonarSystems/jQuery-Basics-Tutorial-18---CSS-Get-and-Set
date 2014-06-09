$(document).ready(function()
{
	$("button").click(function()
	{
		//alert($("#text").css("color")); // GET CSS

		//$("#text").css("color", "yellow"); // SET A SINGLE CSS PROPERTY

		$("#text").css // SET MULTIPLE CSS PROPERTIES
		({
			"color":"yellow",
			"font-size":"10em"
		});
	});
});