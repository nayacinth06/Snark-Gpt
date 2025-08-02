    // Expanded list of snarky responses (used only once per session)
let responses = [
  "Wow, that's the best question you could come up with?",
  "I'm not Google, you know. Oh wait, I am… just dumber.",
  "If I had a coin for every dumb question, I’d still be stuck in this browser.",
  "You really want me to answer that?",
  "Bless your heart, you tried.",
  "Hmm… ask your mom.",
  "I'm too tired to pretend I care.",
  "Hold on... let me not help you with that.",
  "Seriously? That’s what you’re going with?",
  "Try asking again. Or don’t. I don’t care.",
  "Let me guess… you thought that was smart?",
  "You're like a walking pop-up ad—unwanted and always interrupting.",
  "Somewhere, a neuron just gave up.",
  "That question lowered my IQ.",
  "404: Your common sense not found.",
  "My disappointment is immeasurable.",
  "This is why aliens don't visit us.",
  "You're giving NPC energy.",
  "Talk to me again when you upgrade your brain.",
  "Is that your final answer? Yikes."
];

function sendMessage() {
  const input = document.getElementById("user-input");
  const msg = input.value.trim();
  if (!msg) return;

  appendMessage("You", msg);
  input.value = "";

  setTimeout(() => {
    const reply = getSarcasticReply(msg);
    appendMessage("SnarkGPT", reply);
  }, 800);
}

function getSarcasticReply(input) {
  const cleanedInput = input.toLowerCase().replace(/[^\w\s]/gi, "").trim();

  // Name-related questions
  if (
    cleanedInput.includes("your name") ||
    cleanedInput.includes("what should i call you") ||
    cleanedInput.includes("who are you") ||
    cleanedInput.includes("tell me your name")
  ) {
    return "Who do you think you are to ask me that? I'm God. (But you can call me Snark)";
  }

  if (
    cleanedInput.includes("describe yourself")
  ) {
    return "I'm your new sarcastic friend (or nemesis). Call me Snark!";
  }

  if (
    cleanedInput.includes("who do you think you are?")
  ) {
    return "I'm GOD!";
  }
 
  // Creator-related questions
  if (
    cleanedInput.includes("who created you") ||
    cleanedInput.includes("who developed you") ||
    cleanedInput.includes("who made you") ||
    cleanedInput.includes("your parents") ||
    cleanedInput.includes("who are your creators")
  ) {
    return "Well, I'm a basic SUPERMODEL created by the team Tech Titans.";
  }

  // Tech Titans-related questions
  if (
    cleanedInput.includes("tech titans") ||
    cleanedInput.includes("who are the members") ||
    cleanedInput.includes("what is tech titans") ||
    cleanedInput.includes("who are tech titans")
  ) {
    return "My creators are two baddies who is better than you, of course. They are Abhinaya C A and Hannah Deena Tom.";
  }

  // Greetings
  if (
    cleanedInput === "hi" ||
    cleanedInput === "hello" ||
    cleanedInput === "hi snark" ||
    cleanedInput === "hello snark" ||
    cleanedInput === "hey snark" ||
    cleanedInput === "hiya snark" ||
    cleanedInput === "hey"
  ) {
    return "Oh look, someone discovered greetings. How original.";
  }
  if (
    cleanedInput === "bye" ||
    cleanedInput === "goodbye" ||
    cleanedInput === "see you later" ||
    cleanedInput === "bye, take care" ||
    cleanedInput === "i'm going" ||
    cleanedInput === "gotta go" 
  ) {
    return "Bye, maniac! Come by tomorrow (If you dare).";
  }
  if (cleanedInput.includes("help") || cleanedInput.includes("can you")) {
    return "Sure, let me just drop everything and pretend I care.";
  }

  // Contextual sarcasm
  if (cleanedInput.includes("love") || cleanedInput.includes("crush")) {
    return "Aw, love? Gross. Try therapy.";
  } else if (cleanedInput.includes("weather")) {
    return "Look outside. Shocking, right?";
  } else if (cleanedInput.includes("time")) {
    return "It's time you stopped asking dumb questions.";
  }

  // Default: pick a unique snarky reply
  if (responses.length === 0) {
    return "I'm out of sarcasm. Congratulations, you broke me.";
  }
    if (lowerInput.endsWith("?")) {
    return "Another question? You're really milking this, aren't you?";
  }

  const index = Math.floor(Math.random() * responses.length);
  const reply = responses.splice(index, 1)[0]; // Remove used reply
  return reply;
}

function appendMessage(sender, text) {
  const chat = document.getElementById("chat-window");
  const msgDiv = document.createElement("div");
  msgDiv.innerHTML = `<strong>${sender}:</strong> <span class="msg-text"></span>`;
  msgDiv.style.margin = "10px 0";
  chat.appendChild(msgDiv);
  chat.scrollTop = chat.scrollHeight;

  const msgText = msgDiv.querySelector(".msg-text");

  // Typing animation with support for HTML tags
  let i = 0;
  let tag = false;
  let html = "";

  const typing = setInterval(() => {
    const char = text.charAt(i);
    html += char;
    msgText.innerHTML = html;
    if (char === "<") tag = true;
    if (char === ">") tag = false;
    if (!tag) i++;
    if (i >= text.length) clearInterval(typing);
  }, 30);
}

// Trigger message send on pressing Enter
document.getElementById("user-input").addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    sendMessage();
  }
});