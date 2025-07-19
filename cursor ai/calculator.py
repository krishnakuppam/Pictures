import tkinter as tk
from tkinter import ttk
import math

class Calculator:
    def __init__(self, root):
        self.root = root
        self.root.title("Modern Calculator")
        self.root.geometry("300x400")
        self.root.resizable(False, False)
        
        # Style configuration
        self.style = ttk.Style()
        self.style.configure("TButton", padding=5, font=('Arial', 12))
        
        # Display
        self.display_var = tk.StringVar()
        self.display_var.set("0")
        self.display = ttk.Entry(
            root,
            textvariable=self.display_var,
            justify="right",
            font=('Arial', 20),
            state="readonly"
        )
        self.display.grid(row=0, column=0, columnspan=4, padx=5, pady=5, sticky="nsew")
        
        # Calculator state
        self.current_number = "0"
        self.stored_number = None
        self.current_operation = None
        self.start_new_number = True
        
        # Button layout
        self.create_buttons()
        
        # Configure grid
        for i in range(6):
            self.root.grid_rowconfigure(i, weight=1)
        for i in range(4):
            self.root.grid_columnconfigure(i, weight=1)

    def create_buttons(self):
        # Button definitions: text, row, column, colspan
        buttons = [
            ('C', 1, 0, 1), ('±', 1, 1, 1), ('%', 1, 2, 1), ('÷', 1, 3, 1),
            ('7', 2, 0, 1), ('8', 2, 1, 1), ('9', 2, 2, 1), ('×', 2, 3, 1),
            ('4', 3, 0, 1), ('5', 3, 1, 1), ('6', 3, 2, 1), ('-', 3, 3, 1),
            ('1', 4, 0, 1), ('2', 4, 1, 1), ('3', 4, 2, 1), ('+', 4, 3, 1),
            ('0', 5, 0, 2), ('.', 5, 2, 1), ('=', 5, 3, 1)
        ]
        
        for (text, row, col, colspan) in buttons:
            button = ttk.Button(
                self.root,
                text=text,
                command=lambda t=text: self.button_click(t)
            )
            button.grid(row=row, column=col, columnspan=colspan, padx=2, pady=2, sticky="nsew")

    def button_click(self, button_text):
        if button_text.isdigit() or button_text == '.':
            self.handle_number(button_text)
        elif button_text in ('+', '-', '×', '÷'):
            self.handle_operator(button_text)
        elif button_text == '=':
            self.calculate_result()
        elif button_text == 'C':
            self.clear()
        elif button_text == '±':
            self.toggle_sign()
        elif button_text == '%':
            self.handle_percentage()

    def handle_number(self, number):
        if self.start_new_number:
            self.current_number = number
            self.start_new_number = False
        else:
            if number == '.' and '.' in self.current_number:
                return
            if self.current_number == '0' and number != '.':
                self.current_number = number
            else:
                self.current_number += number
        self.update_display()

    def handle_operator(self, operator):
        if self.stored_number is None:
            self.stored_number = float(self.current_number)
        else:
            self.calculate_result()
        self.current_operation = operator
        self.start_new_number = True

    def calculate_result(self):
        if self.stored_number is None or self.current_operation is None:
            return
        
        try:
            current = float(self.current_number)
            if self.current_operation == '+':
                result = self.stored_number + current
            elif self.current_operation == '-':
                result = self.stored_number - current
            elif self.current_operation == '×':
                result = self.stored_number * current
            elif self.current_operation == '÷':
                if current == 0:
                    self.display_var.set("Error")
                    self.clear()
                    return
                result = self.stored_number / current
                
            self.current_number = str(result)
            self.stored_number = None
            self.current_operation = None
            self.start_new_number = True
            self.update_display()
        except Exception:
            self.display_var.set("Error")
            self.clear()

    def clear(self):
        self.current_number = "0"
        self.stored_number = None
        self.current_operation = None
        self.start_new_number = True
        self.update_display()

    def toggle_sign(self):
        if self.current_number.startswith('-'):
            self.current_number = self.current_number[1:]
        else:
            self.current_number = '-' + self.current_number
        self.update_display()

    def handle_percentage(self):
        try:
            current = float(self.current_number)
            self.current_number = str(current / 100)
            self.update_display()
        except Exception:
            self.display_var.set("Error")
            self.clear()

    def update_display(self):
        self.display_var.set(self.current_number)

if __name__ == "__main__":
    root = tk.Tk()
    calculator = Calculator(root)
    root.mainloop() 