import { saveChatHistory } from "@/apis/chatbot/chatbot";
import { ChatEntry } from "@/apis/chatbot/chatbot";

export const useChatSave = () => {
    const handleChatSave = async (chatHistory: ChatEntry[]) => {
        try {
            console.log(chatHistory);
            const response = await saveChatHistory("chat", chatHistory);
            console.log("Chat saved:", response.message);
        } catch (error) {
            const errorMessage =
                (error as { response?: { data?: { detail?: string } } }).response?.data?.detail ||
                "Failed to save chat history.";
            console.error(errorMessage);
        }
    };

    return { handleChatSave };
};
