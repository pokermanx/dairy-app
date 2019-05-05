import { CommentModel } from './comment.model';

export class ItemModel {
    id: number;
    name: string;
    comments: CommentModel[];
    commentsCount: number;
}
