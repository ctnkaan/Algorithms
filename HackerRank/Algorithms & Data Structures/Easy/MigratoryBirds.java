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
     * Complete the 'migratoryBirds' function below.
     *
     * The function is expected to return an INTEGER.
     * The function accepts INTEGER_ARRAY arr as parameter.
     */

    public static int migratoryBirds(List<Integer> arr) {
        int one = 0, two = 0, three = 0, four = 0, five = 0;
        
        for(int i = 0; i < arr.size(); i++) {
            if (arr.get(i) == 1)
                one++;
            else if (arr.get(i) == 2) 
                two++;
            else if (arr.get(i) == 3)
                three++;
            else if (arr.get(i) == 4)
                four++;
            else 
                five++;
        }
        
        if (one >= two && one >= three && one >= four && one >= five)
            return 1;
            
        else if (two >= one && two >= three && two >= four && two >= five)
            return 2;
            
        else if (three >= one && three >= two && three >= four && three >= five)
            return 3;
            
        else if (four >= one && four >= two && four >= three && four >= five)
            return 4;
            
        else 
            return 5;
    }

}

public class Solution {
    public static void main(String[] args) throws IOException {
        BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bufferedWriter = new BufferedWriter(new FileWriter(System.getenv("OUTPUT_PATH")));

        int arrCount = Integer.parseInt(bufferedReader.readLine().trim());

        List<Integer> arr = Stream.of(bufferedReader.readLine().replaceAll("\\s+$", "").split(" "))
            .map(Integer::parseInt)
            .collect(toList());

        int result = Result.migratoryBirds(arr);

        bufferedWriter.write(String.valueOf(result));
        bufferedWriter.newLine();

        bufferedReader.close();
        bufferedWriter.close();
    }
}
