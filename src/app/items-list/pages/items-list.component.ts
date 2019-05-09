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
        localStorage.setItem('lastSelected', JSON.stringify(this.selectedItem.getValue().id));
    }

    constructor() { }

    ngOnInit() {
        this.itemsList = JSON.parse(localStorage.getItem('items'));
        const selectedFromStorage = localStorage.getItem('lastSelected') !== 'undefined' ?
            localStorage.getItem('lastSelected') :
            this.itemsList[0].id;

        this.selectedItem = new BehaviorSubject<ItemModel>(this.itemsList.find(x => x.id === +selectedFromStorage));
        this.selectedItem.subscribe((selection: ItemModel) => {
            if (selection) {
                localStorage.setItem('lastSelected', JSON.stringify(selection.id));
            } else {
                localStorage.setItem('lastSelected', 'undefined');
            }
        });
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
