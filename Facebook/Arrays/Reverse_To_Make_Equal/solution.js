// Add any extra import statements you may need here


// Add any helper functions you may need here


function areTheyEqual(array_a, array_b){
  
    let arr1sum = 0, arr2sum = 0;
    
    for (let i = 0; i < array_a.length; i++) {
      arr1sum += array_a[i];
    }
    
    for (let i = 0; i < array_b.length; i++) {
      arr2sum += array_b[i];
    }
    
    if (arr1sum == arr2sum)
      return true;
    else
      return false;
  }
  
  
  
  
  
  // These are the tests we use to determine if the solution is correct.
  // You can add your own at the bottom.
  function printString(str) {
    var out = '["' + str + '"]';
    return out;
  }
  
  var test_case_number = 1;
  
  function check(expected, output) {
    var result = (expected == output);
    var rightTick = "\u2713";
    var wrongTick = "\u2717";
    if (result) {
      var out = rightTick + ' Test #' + test_case_number;
      console.log(out);
    }
    else {
      var out = '';
      out += wrongTick + ' Test #' + test_case_number + ': Expected ';
      out += printString(expected);
      out += ' Your output: ';
      out += printString(output);
      console.log(out);
    }
    test_case_number++;
  }
  
  var array_a_1 = [1, 2, 3, 4];
  var array_b_1 = [1, 4, 3, 2];
  var expected_1 = true;
  var output_1 = areTheyEqual(array_a_1, array_b_1); 
  check(expected_1, output_1); 
  
  var array_a_2 = [1, 2, 3, 4];
  var array_b_2 = [1, 4, 3, 3];
  var expected_2 = false;
  var output_2 = areTheyEqual(array_a_2, array_b_2); 
  check(expected_2, output_2); 
  
  // Add your own test cases here
  