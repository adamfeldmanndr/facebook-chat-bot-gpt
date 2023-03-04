import login from 'facebook-chat-api';
import { COOKIES, FACEBOOK_ID, FACEBOOK_NAME, OPENAI_API_KEY } from './config';
import logger from './helpers/logger';

const credential = { appState: COOKIES };

async function getAnswer(question: string) {
    const { ChatGPTAPI } = await (eval('import("chatgpt")') as Promise<typeof import('chatgpt')>);

    const api = new ChatGPTAPI({
        apiKey: `${OPENAI_API_KEY}`,
    });

    const res = await api.sendMessage(question);
    return res.text;
}

login(credential, (err, api) => {
    if (err) return logger.log('error', err.error.toString());

    api.listenMqtt(async (err, message) => {
        if (err) return logger.log('error', err.error.toString());

        if (!message || !message.body) return;
        if (message.isGroup && FACEBOOK_ID && !message.mentions[FACEBOOK_ID]) return;

        const endTyping = api.sendTypingIndicator(message.threadID);

        const answer = await getAnswer(message.body.replace(`@${FACEBOOK_NAME}`, ''));

        api.sendMessage(
            answer,
            message.threadID,
            () => {
                endTyping();
                logger.log(
                    'info',
                    JSON.stringify({
                        senderID: message.senderID,
                        question: message.body,
                        answer: answer,
                    })
                );
            },
            message.messageID
        );
    });
});
