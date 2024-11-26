export const sendTelegramMessage = async (chatId: string, message: string): Promise<void> => {
    
    const url = `https://api.telegram.org/bot${import.meta.env.VITE_BOT_TOKEN}/sendMessage`;

    try {
        const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            chat_id: chatId,
            text: message,
        }),
        });

        if (!response.ok) {
        throw new Error(`Telegram API error: ${response.statusText}`);
        }

        console.log('Message sent successfully!');
    } catch (error) {
        console.error('Failed to send Telegram message:', error);
    }
};