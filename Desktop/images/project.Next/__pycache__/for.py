# message="helloworld"
# for i in message:
#     print(i)


text=10

while True:
    text = input("Enter something (type 'exit' to stop): ")
    if text.lower() == 'exit':
        print("Exiting...")
        break
    print("You entered:", text)
