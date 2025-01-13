import React from "react";
import { OnBookClicked } from "./OnBookClicked";
import { Book } from "../../domain/book";

export interface BookListItemProps {
  book: Book;
  onBookClicked: OnBookClicked;
}

export const BookListItem: React.FC<BookListItemProps> = ({
  book,
  onBookClicked,
}) => {
  return (
    <div className="example-book" onClick={() => onBookClicked(book)}>
      <h2>{book.title}</h2>
      <h3>{book.subtitle}</h3>
      <div className="text-meta">by {book.author}</div>
    </div>
  );
};
