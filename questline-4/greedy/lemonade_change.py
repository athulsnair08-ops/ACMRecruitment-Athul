class Solution(object):
    def lemonadeChange(self, bills):
        five = 0
        ten = 0

        for bill in bills:
            if bill == 5:
                five = five + 1

            elif bill == 10:
                if five == 0:
                    return False

                five = five - 1
                ten = ten + 1

            else:
                if ten > 0 and five > 0:
                    ten = ten - 1
                    five = five - 1
                elif five >= 3:
                    five = five - 3
                else:
                    return False

        return True
