#include <iostream>
using namespace std;

// Base class (Parent)
class Animal {
protected:
    string name;

public:
    Animal(string n) : name(n) {}

    // Virtual function for polymorphism
    virtual void makeSound() {
        cout << name << " makes a sound." << endl;
    }

    // Destructor
    virtual ~Animal() {}
};

// Derived class (Child)
class Dog : public Animal {
public:
    Dog(string n) : Animal(n) {}

    // Overriding base class function
    void makeSound() override {
        cout << name << " barks." << endl;
    }
};

// Derived class (Child)
class Cat : public Animal {
public:
    Cat(string n) : Animal(n) {}

    // Overriding base class function
    void makeSound() override {
        cout << name << " meows." << endl;
    }
};

int main() {
    Animal *a1 = new Dog("Buddy");
    Animal *a2 = new Cat("Kitty");

    // Polymorphism
    a1->makeSound();
    a2->makeSound();

    // Free memory
    delete a1;
    delete a2;

    return 0;
}
