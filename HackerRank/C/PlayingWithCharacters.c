#include <stdio.h>
#include <string.h>
#include <math.h>
#include <stdlib.h>

int main() 
{
    char ch;
    char ch2[100];
    char ch3[100];
    char ch4[100];
    char ch5[100];

    scanf("%c", &ch);
    scanf("%s", &ch2);
    scanf("%s", &ch3);
    scanf("%s", &ch4);
    scanf("%s", &ch5);

    printf("%c", ch);
    printf("\n");
    printf("%s", ch2);
    printf("\n");
    printf("%s ", ch3);
    printf("%s ", ch4);
    printf("%s", ch5);
    return 0;
}
