function sendMessage() {
    var messageInput = document.getElementById("message-input");
    var message = messageInput.value;
    
    if (message.trim() !== "") {
      var chatMessages = document.getElementById("chat-messages");
      var newMessage = document.createElement("div");
      newMessage.textContent = message;
      chatMessages.appendChild(newMessage);
  
      // Reset the input field
      messageInput.value = "";
    }
  }
  