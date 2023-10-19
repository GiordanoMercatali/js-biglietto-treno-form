# Exercise

The program will ask user how many Kilometers they want to travel and their age.
Based on the given info, the program will then calculate the cost of the ticket, following these rules:
1. The base price is determined by the Km (0.21€ per Km);
2. Under 18 users will get a 20% discount;
3. Over 65 users will get a 40% discount;
4. The final price will be comunicated "humanly" (meaning that the decimal numbers will not exceed the two digits).

## Solution

### Info

1. Ask user how many Kilometers they want to travel;
2. Ask them their age;
3. Users may get a discount if they're above or below a determined age threshold;

### Procedure

1. Calculate price based on Kilometers;
2. Determine if the user is eligible for a discount;
3. Apply a discount.

### Output

Return the final price.