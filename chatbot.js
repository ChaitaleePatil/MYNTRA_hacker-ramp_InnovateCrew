document.addEventListener('DOMContentLoaded', () => {
    const userInput = document.getElementById('userInput');
    userInput.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });
});

function sendMessage() {
    const userInput = document.getElementById('userInput').value;
    if (userInput.trim() === "") return;

    // Display user's message
    displayMessage(userInput, 'user');

    // Clear the input field
    document.getElementById('userInput').value = "";

    // Simulate a response from the bot
    setTimeout(() => {
        const botResponse = generateBotResponse(userInput);
        displayMessage(botResponse.message, 'bot', botResponse.isImage, botResponse.page);

        // Auto-scroll to the bottom of the chat content
        scrollChatToBottom();
    }, 1000);
}

function displayMessage(message, sender, isImage = false, page = '') {
    const chatContent = document.getElementById('chatContent');
    const messageElement = document.createElement('div');
    messageElement.className = sender === 'user' ? 'user-message' : 'bot-message';

    const messageContent = document.createElement('div');
    messageContent.className = 'message-content';

    if (isImage) {
        const imgElement = document.createElement('img');
        imgElement.src = message;
        imgElement.alt = "Image response";
        imgElement.style.maxWidth = "350px"; // Set max width for the image
        imgElement.style.maxHeight = "350px"; // Set max height for the image
        imgElement.style.borderRadius = "5px";
        imgElement.style.cursor = "pointer";
        imgElement.onclick = function () {
            if (page) {
                window.location.href = page;
            }
        };
        messageContent.appendChild(imgElement);
    } else {
        messageContent.textContent = message; // Use textContent to render text
    }

    messageElement.appendChild(messageContent);
    chatContent.appendChild(messageElement);

    // Auto-scroll to the bottom of the chat content
    scrollChatToBottom();
}

function scrollChatToBottom() {
    const chatContent = document.getElementById('chatContent');
    chatContent.scrollTop = chatContent.scrollHeight;
}

function generateBotResponse(userInput) {
    const normalizedInput = userInput.toLowerCase();

    const greetings = ['hello', 'hi', 'hey'];

    const lookDescriptions = {
        "black saree with pearl jewelery": { message: "images/alia-look1.jpeg", isImage: true, page: "alia-look1.html" },
        "red and pink color saree": { message: "images/alia-look2.jpg", isImage: true, page: "alia-look2.html" },
        "shorts look of alia": { message: "images/alia-look3.jpg", isImage: true, page: "alia-look3.html" }
        // Add more look descriptions and responses here
    };

    for (const greeting of greetings) {
        if (normalizedInput.includes(greeting)) {
            return { message: "Describe the look you want.", isImage: false };
        }
    }

    for (const look in lookDescriptions) {
        if (normalizedInput.includes(look)) {
            return lookDescriptions[look];
        }
    }

    const defaultResponse = "I'm here to help you with our celebrity styles and fashion advice!";
    return { message: defaultResponse, isImage: false, page: '' };
}
