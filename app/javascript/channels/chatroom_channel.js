import consumer from "./consumer"

consumer.subscriptions.create("ChatroomChannel", {
  connected() {
    console.log("✅ Connected to ChatroomChannel")
  },

  received(data) {
    console.log("📩", data)
  }
})