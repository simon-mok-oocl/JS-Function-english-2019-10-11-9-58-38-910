function countWords(message){
	var isWord = false;
	var result = 0;

	for(var i = 0 ; i < message.length ; i++)
	{
		if(isWord && message[i] == ' ')
		{
			isWord = false;
		}
		else if(!isWord && message[i] !=' ')
		{
			isWord = true;
			result++;
		}
	}

	return result
}

