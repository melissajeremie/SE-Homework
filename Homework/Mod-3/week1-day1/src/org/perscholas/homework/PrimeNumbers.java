package org.perscholas.homework;

import java.lang.reflect.Array;

public class PrimeNumbers {
    public static void primes(int number) {
        int i = 0;
        while(i <= number) {
            if ((i%2 != 0) && (i%3 != 0) && (i%5 != 0) && (i%7 !=0) && (i%9 !=0)){
                System.out.println(i);
            }
            i++;
        }
    }
}
