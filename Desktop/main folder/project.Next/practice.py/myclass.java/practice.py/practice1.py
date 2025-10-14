# Simple To-Do List in Python

tasks = []

def show_menu():
    print("\n---- To-Do List ----")
    print("1. View Tasks")
    print("2. Add Task")
    print("3. Remove Task")
    print("4. Mark Task as Done")
    print("5. Exit")

def view_tasks():
    if not tasks:
        print("No tasks yet!")
    else:


        
        for i, (task, done) in enumerate(tasks, start=1):
            status = "✔️" if done else "❌"
            print(f"{i}. {task} [{status}]")

def add_task():
    task = input("Enter task: ")
    tasks.append((task, False))
    print("Task added!")

def remove_task():
    view_tasks()
    if tasks:
        try:
            idx = int(input("Enter task number to remove: ")) - 1
            if 0 <= idx < len(tasks):
                tasks.pop(idx)
                print("Task removed!")
            else:
                print("Invalid task number!")
        except ValueError:
            print("Please enter a valid number!")

def mark_done():
    view_tasks()
    if tasks:
        try:
            idx = int(input("Enter task number to mark as done: ")) - 1
            if 0 <= idx < len(tasks):
                task, _ = tasks[idx]
                tasks[idx] = (task, True)
                print("Task marked as done!")
            else:
                print("Invalid task number!")
        except ValueError:
            print("Please enter a valid number!")

# Main loop
while True:
    show_menu()
    choice = input("Choose an option: ")
    if choice == "1":
        view_tasks()
    elif choice == "2":
        add_task()
    elif choice == "3":
        remove_task()
    elif choice == "4":
        mark_done()
    elif choice == "5":
        print("Goodbye!")
        break


    else:
        print("Invalid choice! Try again.")
