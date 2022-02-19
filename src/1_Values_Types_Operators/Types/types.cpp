#include <iostream>
#include <typeinfo>

int main() {
    // Type of variable in C++
    std::cout << "Type of int: " << typeid(int).name() << std::endl;
    std::cout << "Type of double: " << typeid(double).name() << std::endl;
    std::cout << "Type of char: " << typeid(char).name() << std::endl;
    std::cout << "Type of bool: " << typeid(bool).name() << std::endl;
    std::cout << "Type of void: " << typeid(void).name() << std::endl;
    std::cout << "Type of int*: " << typeid(int*).name() << std::endl;
    std::cout << "Type of double*: " << typeid(double*).name() << std::endl;
    std::cout << "Type of char*: " << typeid(char*).name() << std::endl;
    std::cout << "Type of bool*: " << typeid(bool*).name() << std::endl;
    std::cout << "Type of void*: " << typeid(void*).name() << std::endl;
    std::cout << "Type of int&: " << typeid(int&).name() << std::endl;
    std::cout << "Type of double&: " << typeid(double&).name() << std::endl;
    std::cout << "Type of char&: " << typeid(char&).name() << std::endl;
    std::cout << "Type of bool&: " << typeid(bool&).name() << std::endl;
    std::cout << "Type of f(): " << typeid(int()).name() << std::endl;

    // Dynamic type of variable in C++
    int i = 0;
    i = 'a';
    std::cout << i << std::endl;

    // Implicit conversion
    double j = 3.33;
    int d = j;
    std::cout << d << std::endl;

    // char* c = d + '1';
}
