import { Book } from "../../../domain/book";

export interface OnBookClicked {
  (book: Book): void;
}
