# Chatbot GPT via Facebook Messenger
> This is a chatbot application that uses the GPT model to answer user's questions through Facebook Messenger.

> The application uses the <a href="https://github.com/Schmavery/facebook-chat-api"> facebook-chat-api</a> library to log in to Facebook and listen for messages and 
> <a href="https://github.com/transitive-bullshit/chatgpt-api" > chatgpt-api </a> library to use ChatGPT api.

## Getting Started
### Prerequisites
 - Docker
 - Node.js
 
### Installation
1. Clone the repository:
```bash
  git clone https://github.com/hiepnguyen223/facebook-chat-bot-gpt.git
  cd facebook-chat-bot-apt 
```

2. Create .env file"
```bash
  cp .env.example .env
```
    
```ts
  //Set your environment variables in the .env file:
  FACEBOOK_ID='...'
  FACEBOOK_NAME='...'
  OPENAI_API_KEY='...'
```

2. Create cookies.json (Facebook Cookies) file:
```bash
  cp cookies.example.json cookies.json
```

3. Build the docker image:
```bash
  docker build -t chat-bot-gpt .
```

4. Run docker image as a container:
```bash
  docker run chat-bot-gpt
```

<img src="https://res.cloudinary.com/uethehe/image/upload/v1677927843/Screenshot_from_2023-03-04_17-23-33_k0vxgt.png" />
