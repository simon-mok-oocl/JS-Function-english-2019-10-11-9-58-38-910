function reverseString(message){
	var result = '';

	for(var i = 0 ; i < message.length ; i++)
	{
		result += message[message.length - i -1];
	}

	return result;
}

