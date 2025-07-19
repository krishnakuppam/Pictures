# # c = 10
# # while c > 0:
# #     print("cake take it")
# #     c-=1
# # print(c)

# num = 0
# while num < 10000:
#     num += 1
#     if num % 2 == 0:
#         continue  
#     print(num)
# print("it is finish")

from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('myapp.urls')),  # Include app URLs
]

