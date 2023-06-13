(function () {
var names = ["Yaakov", "John", "Jen", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
for (var i = 0; i < names.length; i++) {
	var firstletter = names[i].charAt(0).tolowerCase();
	if (firstletter === "j"){
		byespeaker.speak(names[i]);
	} else{
		helloSpeaker.speak(names[i]);
	}
}
}
)();