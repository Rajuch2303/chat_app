import consumer from "./consumer"

consumer.subscriptions.create("ChatroomChannel", {
  connected() {
    console.log("✅ Connected to ChatroomChannel")
  },

  received(data) {
    const chatbox = document.getElementById("chatbox")
    const message = document.createElement("p")
    message.innerText = data.content
    chatbox.appendChild(message)
    chatbox.scrollTop = chatbox.scrollHeight
  }
})

// Handle sending messages
document.addEventListener("turbo:load", () => {
  const button = document.getElementById("send_btn")
  const input = document.getElementById("message_input")

  if (!button) return

  button.addEventListener("click", () => {
    fetch("/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-CSRF-Token": document.querySelector("[name='csrf-token']").content
      },
      body: JSON.stringify({ content: input.value })
    })

    input.value = ""
  })
})