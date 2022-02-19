#include <iostream>

int main()
{
  // EQUALITY OPERATORS:
  // ==, !=
  int x = 10;
  char y = 'a';
  std::cout << (x == y) << std::endl;
  std::cout << (x != y) << std::endl;

  // OR, AND ASSIGNMENT OPERATORS:
  // ||, &&
  int a = 10 || 20;
  int b = false || 20;
  int c = 10 && 20;
  int d = false && 20;
  std::cout << a << std::endl;
  std::cout << b << std::endl;
  std::cout << c << std::endl;
  std::cout << d << std::endl;
  return 0;
}
