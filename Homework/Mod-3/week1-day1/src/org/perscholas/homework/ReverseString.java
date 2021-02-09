package org.perscholas.homework;

public class ReverseString {

    public static void reverse(String string){
        String newString = "";
        char[] stringArray = string.toCharArray();

        for(int i = string.length() - 1; i > -1; i--){
            newString += stringArray[i];
        }
        System.out.println(newString);
    }
}
