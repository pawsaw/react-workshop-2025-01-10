export interface ChatMessage {
  peer: string;
  message: string;
}

export interface OnChatMessagesReceived {
  (history: ChatMessage[]): void;
}

let messages: ChatMessage[] = [];

export interface Subscription {
  unsubscribe: () => void;
}

export function subscribe(
  url: string,
  onChatMessagesReceived: OnChatMessagesReceived
): Subscription {
  const interval = setInterval(() => {
    messages = [
      ...messages,
      {
        peer: "Max",
        message: "Hallo",
      },
    ];
    onChatMessagesReceived(messages);
  }, 5000);

  return {
    unsubscribe: () => clearInterval(interval),
  };
}
