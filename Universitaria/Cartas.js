function check(nums){
	var arr = nums.split(" ");
	for (var i = 0; i < arr.length; i++){
		arr[i] = parseInt(arr[i]);
	}
	
	return arr;
}