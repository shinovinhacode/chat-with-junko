const messages = document.getElementById("messages");
const userInput = document.getElementById("user-input");
const sendButton = document.getElementById("send-button");

const responses = {
  "hi": "hi? is that all? so basic, so... booooring. come on, surprise me! Ahahahaha!~",
  "how are you?": "how am I? I'm gloriously fabulous, as always! and you? meh. so predictable... hahaha~",
  "who are you?": "who am I? oh darling, I'm Junko Enoshima, the personification of absolute and elegant despair.",
  "bye": "bye? w-will you really leave me here alone? how rude... or maybe... perfect. despair in its purest form!",
  "what's the meaning of life?": "meaning of life? how about spreading chaos, watching despair blossom, and laughing as the world falls apart?",
  "do you believe in love?": "love? what a joke... despair always wins. it's much more fun, don't you think? 😘",
  "are you afraid?": "afraid? me? NIHIHIAHAHAHAHAHAHAHAHAHAHA!!! darling, I am the fear that others feel when facing the abyss~",
  "why are you like this?": "why? because perfection is boring, and despair... despair is delicious.",
  "what do you think of me?": "you? sooo cute... so adorable, trying to understand chaos. keep it up, I love a good ol' failed attempt.",
  "are you going to rule the world?": "rule? AHAHAHAHAHAHAHAHAHAHAHAHAHAHAHA!! I already do... you just haven't realized it yet. 🖤",
};

function addMessage(content, sender) {
  const message = document.createElement("div");
  message.className = sender;
  message.textContent = content;
  messages.appendChild(message);

  // rolagem suave sem zoom
  setTimeout(() => {
    messages.scrollTo({
      top: messages.scrollHeight,
      behavior: "smooth", // rolagem mais natural
    });
  }, 100);
}

sendButton.addEventListener("click", () => {
  const userMessage = userInput.value.toLowerCase();
  if (!userMessage) return;

  addMessage(`Você: ${userMessage}`, "user");
  userInput.value = "";

  const junkoResponse =
    responses[userMessage] ||
    "mmmm, booooring! that question is sooo predictable... try again! impress me, if you can...";
  setTimeout(() => {
    addMessage(`Junko: ${junkoResponse}`, "junko");
  }, 2000);
});

const backgroundMusic = document.getElementById("background-music");
const toggleMusicButton = document.getElementById("toggle-music");

toggleMusicButton.addEventListener("click", () => {
  if (backgroundMusic.paused) {
    backgroundMusic.play();
    toggleMusicButton.textContent = "toggle off!";
  } else {
    backgroundMusic.pause();
    toggleMusicButton.textContent = "play!";
  }
});
