import { useState, useEffect } from "react";
import { ChatMessage, subscribe } from "./chat";

export const useChatHistory = (url: string): ChatMessage[] => {
  const [history, setHistory] = useState<ChatMessage[]>([]);

  useEffect(() => {
    const sub = subscribe(url, (_history) => {
      setHistory(_history);
    });

    return () => {
      sub.unsubscribe();
    };
  }, [url]);

  return history;
};
