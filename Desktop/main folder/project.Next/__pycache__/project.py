import pygame
import random

# Initialize pygame
pygame.init()

# Game constants
WIDTH, HEIGHT = 600, 600
SNAKE_SIZE = 10
SPEED = 12

# Colors
BLACK = (0, 0, 0)
WHITE = (255, 255, 255)
GREEN = (0, 255, 0)

# Initialize game screen
game_screen = pygame.display.set_mode((WIDTH, HEIGHT))
pygame.display.set_caption("Snake Game")

# Snake starting position
snake_x, snake_y = WIDTH // 2, HEIGHT // 2
change_x, change_y = 0, 0

# Generate initial food position
def get_random_food():
    return (random.randrange(0, WIDTH, SNAKE_SIZE), random.randrange(0, HEIGHT, SNAKE_SIZE))

food_x, food_y = get_random_food()

# Snake body
snake_body = [(snake_x, snake_y)]
snake_length = 1  # Initial length

# Clock to control game speed
clock = pygame.time.Clock()

# Main game loop
running = True
while running:
    # Handle events
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False

        if event.type == pygame.KEYDOWN:
            if event.key == pygame.K_LEFT and change_x == 0:
                change_x = -SNAKE_SIZE
                change_y = 0
            elif event.key == pygame.K_RIGHT and change_x == 0:
                change_x = SNAKE_SIZE
                change_y = 0
            elif event.key == pygame.K_UP and change_y == 0:
                change_x = 0
                change_y = -SNAKE_SIZE
            elif event.key == pygame.K_DOWN and change_y == 0:
                change_x = 0
                change_y = SNAKE_SIZE

    # Update snake position
    snake_x = (snake_x + change_x) % WIDTH
    snake_y = (snake_y + change_y) % HEIGHT

    # Check if snake eats food
    if (snake_x, snake_y) == (food_x, food_y):
        food_x, food_y = get_random_food()
        while (food_x, food_y) in snake_body:  # Ensure food does not spawn inside the snake
            food_x, food_y = get_random_food()
        snake_length += 1  # Increase length

    # Update snake body
    snake_body.append((snake_x, snake_y))
    if len(snake_body) > snake_length:
        del snake_body[0]  # Remove tail segment

    # Check for self-collision
    if len(snake_body) != len(set(snake_body)):
        print("Game Over! You bit yourself.")
        running = False  # End game on self-collision

    # Draw elements
    game_screen.fill(BLACK)
    pygame.draw.rect(game_screen, GREEN, [food_x, food_y, SNAKE_SIZE, SNAKE_SIZE])  # Food
    for (x, y) in snake_body:
        pygame.draw.rect(game_screen, WHITE, [x, y, SNAKE_SIZE, SNAKE_SIZE])  # Snake

    # Refresh display
    pygame.display.update()
    clock.tick(SPEED)

pygame.quit()
