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
     * Complete the 'plusMinus' function below.
     *
     * The function accepts INTEGER_ARRAY arr as parameter.
     */

    public static void plusMinus(List<Integer> arr) {
    
    float pos = 0, neg = 0, zero = 0;
    
    for (int i = 0; i < arr.size(); i++) {
        if (arr.get(i) > 0)
            pos++;
        else if (arr.get(i) < 0)
            neg++;
        else
            zero++;
    }
    
    float sum1 = pos / arr.size();
    float sum2 = neg / arr.size();
    float sum3 = zero / arr.size();
    
    System.out.println(sum1);
    System.out.println(sum2);
    System.out.println(sum3);
    

    }

}

public class Solution {
    public static void main(String[] args) throws IOException {
        BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(System.in));

        int n = Integer.parseInt(bufferedReader.readLine().trim());

        List<Integer> arr = Stream.of(bufferedReader.readLine().replaceAll("\\s+$", "").split(" "))
            .map(Integer::parseInt)
            .collect(toList());

        Result.plusMinus(arr);

        bufferedReader.close();
    }
}
