### Telegram Bot with Watermarking Feature

This Node.js script creates a Telegram bot using `node-telegram-bot-api` that allows users to add a watermark to photos they send to the bot. The bot retrieves images, processes them by adding a specified watermark text, and sends the watermarked images back to the user.

### Prerequisites

- Node.js installed on your machine.
- A Telegram bot token obtained from the BotFather on Telegram.
- `.env` file configured with `API_TOKEN` (Telegram bot token) and `WATER_MARK_TEXT` (text for watermark).

### Installation

1. Clone the repository and navigate to the project directory:

   ```bash
   git clone <repository-url>
   cd <project-directory>
   ```

2. Install dependencies using npm:

   ```bash
   npm install
   ```

### Setup

1. Create a `.env` file in the root directory and add your Telegram bot token and watermark text:

   ```plaintext
   API_TOKEN=your_telegram_bot_token_here
   WATER_MARK_TEXT=your_watermark_text_here
   ```

### Running the Bot

Start the bot by running:

```bash
node bot.js
```

### Bot Commands

- **/start**: Initiates the bot and prompts the user to send a photo to add a watermark.
  
### Features

- **Watermarking Photos**: Allows users to send photos to the bot, which adds a watermark at the bottom center of the image.
  
### Dependencies

- `node-telegram-bot-api`: Provides an easy-to-use interface for interacting with Telegram bots.
- `dotenv`: Loads environment variables from a `.env` file.
- `axios`: Handles HTTP requests to download images from Telegram.
- `canvas`: Generates images and manipulates them to add watermarks.
- `fs`: Provides file system operations to read/write files.

### Error Handling

- Logs errors to console and notifies users if an error occurs during photo processing.

### Example Usage

1. Start the bot by sending `/start` command in Telegram.
2. Send a photo to the bot to receive a watermarked version with the specified text.

### Notes

- Ensure the `.env` file is properly configured with your Telegram bot token and watermark text before running the bot.
- Handle errors gracefully to provide a seamless user experience.

### Author

- Created by Fais Edathil

### License

This project is licensed under the MIT License

---
