function palindrome(message){
	for(var i = 0 ; i < message.length ; i++)
	{
		if(message[i] != message[message.length - i -1])
		{
			return false;
		}
	}

	return true;
}

