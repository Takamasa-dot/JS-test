const toggleButton = document.getElementById('chatbot-toggle');
const chatbotWindow = document.getElementById('chatbot-window');
const messages = document.getElementById('chatbot-messages');
const userInput = document.getElementById('user-input');

toggleButton.addEventListener('click', () => {
  chatbotWindow.classList.toggle('open');
});

function sendMessage() {
  const text = userInput.value.trim();
  if (text === '') return;

  const userMsg = document.createElement('div');
  userMsg.textContent = '👤 ' + text;
  messages.appendChild(userMsg);

  const botMsg = document.createElement('div');
  botMsg.textContent = '🤖 これは自動応答です：' + text;
  messages.appendChild(botMsg);

  userInput.value = '';
  messages.scrollTop = messages.scrollHeight;
}
