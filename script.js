document.addEventListener("DOMContentLoaded", function () {
    const chatContainer = document.getElementById("chat-container");
    const chatBox = document.getElementById("chat-box");
    const userInput = document.getElementById("user-input");
    const sendButton = document.getElementById("send-button");
    const toggleChatContainer = document.getElementById("toggle-chat-container");
    const closeButton = document.getElementById("close-button");

    const generalQuestions = [
        "What is your name?",
        "How are you?",
        "Where are you from?",
        "What do you do?",
        "Tell me a joke.",
        "What is the meaning of life?",
        "Can you help me with something?",
        "What's the weather like?",
        "Tell me about yourself.",
        "Goodbye",
    ];

    const generalAnswers = [
        "I'm a chatbot.",
        "I'm fine, thank you.",
        "I exist in the digital realm.",
        "I'm here to assist you.",
        "Why did the computer go to therapy? It had too many bytes of emotional baggage.",
        "The meaning of life is a complex philosophical question.",
        "Of course! What do you need help with?",
        "I'm sorry, I don't have access to real-time weather information.",
        "I am a virtual assistant created to answer questions.",
        "Goodbye! Feel free to return if you have more questions.",
    ];

    function normalizeText(text) {
        // Remove punctuation and convert to lowercase
        return text.replace(/[^\w\s]/gi, "").toLowerCase();
    }

    function getBotResponse(userQuestion) {
        const normalizedUserQuestion = normalizeText(userQuestion);
        const index = generalQuestions.findIndex(
            (question) => normalizeText(question) === normalizedUserQuestion
        );
        if (index !== -1) {
            return generalAnswers[index];
        } else {
            return "I'm not sure how to answer that.";
        }
    }

    function appendMessage(message, sender) {
        const messageElement = document.createElement("div");
        messageElement.textContent = message;
        messageElement.classList.add("message", sender);
        chatBox.appendChild(messageElement);
    }

    function processUserInput() {
        const userQuestion = userInput.value;
        if (userQuestion.trim() !== "") {
            appendMessage(userQuestion, "user");
            userInput.value = "";

            // Simulate a delay before bot responds
            setTimeout(function () {
                const botResponse = getBotResponse(userQuestion);
                appendMessage(botResponse, "bot");
                chatBox.scrollTop = chatBox.scrollHeight;
            }, 500); // 0.5 seconds delay
        }
    }

    sendButton.addEventListener("click", function () {
        processUserInput();
    });

    userInput.addEventListener("input", function () {
        userInput.style.width = "calc(" + (userInput.value.length + 1) + "ch)";
    });

    userInput.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            processUserInput();
        }
    });

    function toggleChat() {
        chatContainer.style.display = chatContainer.style.display === "none" ? "block" : "none";
    }

    function closeChat() {
        chatContainer.style.display = "none";
    }

    toggleChatContainer.addEventListener("click", function () {
        toggleChat();
    });

    closeButton.addEventListener("click", function () {
        closeChat();
    });
});
