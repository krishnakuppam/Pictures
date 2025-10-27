#include <iostream>  // Header file for input and output

using namespace std; // So we can use cout, cin without std::

int main() {
    // Display message on screen
    cout << "Hello, World!" << endl;
    
    // Get user input
    int number;
    cout << "Enter a number: ";
    cin >> number;
    
    // Display the number
    cout << "You entered: " << number << endl;
    
    // Check if even or odd
    if (number % 2 == 0) {
        cout << "The number is even." << endl;
    } else {
        cout << "The number is odd." << endl;
    }

    return 0; // End of program
}
