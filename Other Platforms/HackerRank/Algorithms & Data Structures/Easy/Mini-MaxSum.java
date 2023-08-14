import java.io.*;
import java.math.*;
import java.security.*;
import java.text.*;
import java.util.*;
import java.util.concurrent.*;
import java.util.function.*;
import java.util.regex.*;
import java.util.stream.*;
import static java.util.stream.Collectors.joining;
import static java.util.stream.Collectors.toList;

class Result {

    /*
     * Complete the 'miniMaxSum' function below.
     *
     * The function accepts INTEGER_ARRAY arr as parameter.
     */

    public static void miniMaxSum(List<Integer> arr) {
        
        //min -> find the largest and dont include it
        int largest = arr.get(0);
        
        for (int i = 0; i < arr.size(); i++) {
            if (largest < arr.get(i))
                largest = arr.get(i);
        }
        
        //sum
        long sum = 0;
        for (int i = 0; i < arr.size(); i++)
            sum += arr.get(i);
        
            
        
        long minSum = sum;
        
        minSum -= largest;
        
        
        //highest -> find min and dont include it
        int lowest = arr.get(0);
        
        for (int i = 1; i < arr.size(); i++) {
            if (lowest > arr.get(i))
                lowest= arr.get(i);
        }

        long maxSum = sum - lowest;
        
        System.out.println(minSum+" "+maxSum);
        
    }

}

public class Solution {
    public static void main(String[] args) throws IOException {
        BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(System.in));

        List<Integer> arr = Stream.of(bufferedReader.readLine().replaceAll("\\s+$", "").split(" "))
            .map(Integer::parseInt)
            .collect(toList());

        Result.miniMaxSum(arr);

        bufferedReader.close();
    }
}
