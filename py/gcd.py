def gcd(a, b):
    while a != 0 and b != 0:
        if a == b:
            break
        elif a > b:
            a = a % b
        else:
            b = b % a
    return max(a, b)


if __name__ == "__main__":
    a, b = map(int, input().split())
    print(gcd(a, b))