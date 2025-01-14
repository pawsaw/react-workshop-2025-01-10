import { useEffect, useState } from "react";
import { fetchBooks } from "./api";
import { Book } from "./Book";

export interface UseBooksResult {
  books: Book[] | null;
  loading: boolean;
  error?: string;
  reload: () => Promise<void>;
}

export const useBooks = (): UseBooksResult => {
  const [books, setBooks] = useState<Book[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  const reload = async () => {
    try {
      setBooks(null);
      const _books = await fetchBooks();
      setBooks(_books);
    } catch (_error) {
      setError(_error as string);
    }
  };

  useEffect(() => {
    reload();
  }, []);

  return {
    books,
    loading: books === null,
    reload,
    error: error ? error : undefined,
  };
};
