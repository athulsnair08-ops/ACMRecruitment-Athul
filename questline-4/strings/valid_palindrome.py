class Solution(object):
    def isPalindrome(self, s):
        text = ""

        for char in s:
            if char.isalnum():
                text = text + char.lower()

        return text == text[::-1]
