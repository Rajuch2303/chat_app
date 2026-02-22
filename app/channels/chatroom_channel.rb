class ChatroomChannel < ApplicationCable::Channel
  def subscribed
    stream_from "chatroom"
  end

  def receive(data)
    Message.create!(content: data["content"])
    ActionCable.server.broadcast("chatroom", data)
  end
end
