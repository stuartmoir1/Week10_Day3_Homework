var arrayTasks = {

	concat: function (arr1, arr2) {
    return arr1.concat(arr2);
	},

	insertAt: function (arr, itemToAdd, index) {
		arr.splice(index, 0, itemToAdd);
		return arr;
	},

	square: function (arr) {
	  return arr.map(function(element){
      return element *= element;
	  });	
	},

	sum: function (arr) {
	  return arr.reduce(function(acc, element){
      return acc + element;
	  });	
	},

	findDuplicates: function (arr){
	  var duplicatesArray = [];
	  for (var i = 0; i < arr.length - 1; i++) {
	    if ((arr[i + 1] === arr[i]) && (duplicatesArray.includes(arr[i + 1]) === false)) {
	    	duplicatesArray.push(arr[i + 1]);
	    };
	  };
	  return duplicatesArray;
	},

	removeAndClone: function (arr, valueToRemove) {
		var filteredArray = [];
		arr.forEach(function(element){
      if (element != valueToRemove){
        filteredArray.push(element); 
      };
		});
		return filteredArray;
	},

	findIndexesOf: function (arr, itemToFind) {
	  var indexArray = [];
	  var index = 0;
	  arr.forEach(function(element){
      if (element === itemToFind){
        indexArray.push(index);
      };
      index++;
	  });
	  return indexArray;
	},

	sumOfAllEvenNumbersSquared: function (arr) {
	  var sum = 0;
	  arr.forEach(function(element){
      if (element % 2 === 0){
        sum += (element ** 2);
      }
	  });
	  return sum;
	}
}

module.exports = arrayTasks
