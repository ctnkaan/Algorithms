#include <stdio.h>
#include <string.h>
#include <math.h>
#include <stdlib.h>

int main()
{
	int num1,num2,intSum,intSum2;
    float num3,num4,fSum,fSum2;

    scanf("%d %d", &num1, &num2);
    scanf("%f %f",&num3,&num4);

    intSum=num1+num2;
    fSum=num3+num4;

    intSum2=num1-num2;
    fSum2= num3-num4;

    printf("%d ", intSum);
    printf("%d", intSum2);
    printf("\n");
    printf("%.1f ",fSum);
    printf("%.1f",fSum2);
    
    return 0;
}

