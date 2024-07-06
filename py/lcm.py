def lcm(a, b):
    largest = a * b
    while a != 0 and b != 0:
        if a == b:
            break
        elif a > b:
            a = a % b
        else:
            b = b % a
    return int(largest / max(a, b))


if __name__ == '__main__':
    a, b = map(int, input().split())
    print(lcm(a, b))

