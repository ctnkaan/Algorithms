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
     * Complete the 'timeConversion' function below.
     *
     * The function is expected to return a STRING.
     * The function accepts STRING s as parameter.
     */

    public static String timeConversion(String s) {
        
        String checker = s.substring(8,10);
        boolean checkAM = checker.equals("AM");
        
        String firstTwo = s.substring(0,2);
        boolean checkFirstTwo = firstTwo.equals("12");
        
        
        
        //PM
        if (checkAM == false ) {
        
            String aStr = s.substring(0,2);
            
            int a = Integer.parseInt(aStr);
            
            s = s.substring(2,8);
            
            if (checkFirstTwo == true) 
                return (""+a+""+s);
            
            
            a += 12;
            
            if (a < 0)
                a *= -2;
            

            return (""+a+""+s);   
        }
        
        //AM
        else if (checkAM == true ) {
            String a = s.substring(2,8);
            
            boolean firstTwoIf = firstTwo.equals("12");
            if (firstTwoIf == true) {
                firstTwo = "00";
            }
            
            return (firstTwo+a);
        }
        
        return ("error");
    }

}

public class Solution {
    public static void main(String[] args) throws IOException {
        BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bufferedWriter = new BufferedWriter(new FileWriter(System.getenv("OUTPUT_PATH")));

        String s = bufferedReader.readLine();

        String result = Result.timeConversion(s);

        bufferedWriter.write(result);
        bufferedWriter.newLine();

        bufferedReader.close();
        bufferedWriter.close();
    }
}
