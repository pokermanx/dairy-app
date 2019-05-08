import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ItemModel } from 'src/app/shared/models/item.model';
import { FormControl, Validators } from '@angular/forms';
import { CommentModel } from 'src/app/shared/models/comment.model';

export enum Colors {
    '#375E97' = 1,
    '#FB6542' = 2,
    '#FFBB00' = 3,
    '#3F681C' = 4,
    '#943045' = 5
}

@Component({
    selector: 'app-comments',
    templateUrl: './comments.component.html',
    styleUrls: ['./comments.component.scss', '../../../shared/scss/card.scss', '../../../shared/scss/buttons.scss'],
})

export class CommentsComponent implements OnInit, OnDestroy {

    @Input() selected: BehaviorSubject<ItemModel>;


    selectedItem: ItemModel;

    colors = Colors;

    commentInput = new FormControl(null, [
        Validators.required
    ]);

    @Output() commentAdded = new EventEmitter();

    constructor() { }

    ngOnInit() {
        this.selected.subscribe((item: ItemModel) => this.selectedItem = item);
    }

    addComment() {
        const comment: CommentModel = {
            text: this.commentInput.value,
            color: this.colors[Math.floor((Math.random() * 5) + 1)]
        };
        this.selectedItem.comments.push(comment);
        this.selectedItem.commentsCount += 1;
        this.commentInput.setValue(null);
        this.commentAdded.emit();
    }

    ngOnDestroy() {
        this.selected.unsubscribe();
    }

}
