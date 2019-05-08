import { Component, OnInit } from '@angular/core';
import { ItemModel } from 'src/app/shared/models/item.model';
import { FormControl, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

@Component({
    selector: 'app-items-list',
    templateUrl: './items-list.component.html',
    styleUrls: ['./items-list.component.scss', '../../shared/scss/buttons.scss', '../../shared/scss/card.scss'],
})
export class ItemsListComponent implements OnInit {

    itemsList: ItemModel[];

    selectedItem: BehaviorSubject<ItemModel>;

    itemName = new FormControl(null, [
        Validators.required
    ]);

    commentAdded() {
        localStorage.setItem('items', JSON.stringify(this.itemsList));
    }

    constructor() { }

    ngOnInit() {
        this.itemsList = JSON.parse(localStorage.getItem('items'));
        const selectedFromStorage: ItemModel = localStorage.getItem('lastSelected') !== 'undefined' ?
            JSON.parse(localStorage.getItem('lastSelected')) :
            this.itemsList[0];
        this.selectedItem = new BehaviorSubject<ItemModel>(selectedFromStorage);
        this.selectedItem.subscribe(selection => {
            localStorage.setItem('lastSelected', JSON.stringify(this.selectedItem.getValue()));
        });
        localStorage.setItem('items', JSON.stringify(this.itemsList));
    }

    onAdd() {
        const lastId = Math.max.apply(null, this.itemsList.map(el => +el.id));
        const item: ItemModel = {
            id: isFinite(lastId) ? +(lastId + 1) : 1,
            name: this.itemName.value,
            comments: [],
            commentsCount: 0,
        };
        this.itemsList.push(item);
        localStorage.setItem('items', JSON.stringify(this.itemsList));
        this.itemName.setValue(null);
        this.selectedItem.next(item);
    }

    onDelete(id: number) {
        this.itemsList = this.itemsList.filter(el => el.id !== id);

        if (this.selectedItem.getValue().id === id) {
            this.selectedItem.next(this.itemsList[0]);
        }
        localStorage.setItem('items', JSON.stringify(this.itemsList));
    }
}
