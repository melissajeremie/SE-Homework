package org.perscholas.homework;

import static org.perscholas.homework.PrimeNumbers.primes;
import static org.perscholas.homework.ReverseString.*;
import static org.perscholas.homework.Parrot.*;

public class Main {

    public static void main(String [] args){

        reverse("juxtaposition");

        primes(20);

        getUp(false, 21);
        getUp(true, 23);
        getUp(true, 6);

    }
}
