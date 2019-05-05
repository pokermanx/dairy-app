import { Component, OnInit } from '@angular/core';
import { ItemModel } from 'src/app/shared/models/item.model';
import { FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'app-items-list',
    templateUrl: './items-list.component.html',
    styleUrls: ['./items-list.component.scss', '../../shared/scss/buttons.scss', '../../shared/scss/card.scss']
})
export class ItemsListComponent implements OnInit {

    itemsList: ItemModel[];

    itemName = new FormControl(null, [
        Validators.required
    ]);

    constructor () {}

    ngOnInit() {
        // localStorage.setItem('items', JSON.stringify([
        //     {
        //         id: 1,
        //         name: 'ne No',
        //         comments: [
        //             'sdafasdjsfdkjfdsjkfdskjfdskhjfds sfd jhsdhfs dh fsdjkh sfj',
        //             'sdafasdjsfdkjfdsjkfdskjfdsa2332khjfds sfd jhsdhfs dh fsdjkh sfj',
        //             'sda5fasdjsfdkjfdsjkfdskjfdskhdasjfds sfd jh55sdhfs dh fsdjkh sfj',
        //         ],
        //         commentsCount: 3
        //     },
        //     {
        //         id: 3,
        //         name: 'ssss No',
        //         comments: [
        //             'sdafasdjsfdkjfdsjkfdskjfdskhjfds sfd jhsdhfs dh fsdjkh sfj',
        //             'sdafasdjsfdkjfdsjkfdskjfdsa2332khjfds sfd jhsdhfs dh fsdjkh sfj',
        //             'sda5fasdjsfdkjfdsjkfdskjfdskhdasjfds sfd jh55sdhfs dh fsdjkh sfj',
        //         ],
        //         commentsCount: 3
        //     },
        //     {
        //         id: 4,
        //         name: 'last No',
        //         comments: [
        //             'sdafasdjsfdkjfdsjkfdskjfdskhjfds sfd jhsdhfs dh fsdjkh sfj',
        //             'sdafasdjsfdkjfdsjkfdskjfdsa2332khjfds sfd jhsdhfs dh fsdjkh sfj',
        //             'sda5fasdjsfdkjfdsjkfdskjfdskhdasjfds sfd jh55sdhfs dh fsdjkh sfj',
        //         ],
        //         commentsCount: 3
        //     },
        // ]));

        this.itemsList = JSON.parse(localStorage.getItem('items'));
        console.log(this.itemsList);
        localStorage.setItem('items', JSON.stringify(this.itemsList));
    }

    onAdd() {
        const lastId = Math.max.apply(null, this.itemsList.map(el => +el.id));
        const item: ItemModel = {
            id: isFinite(lastId) ? +(lastId + 1) : 1,
            name: this.itemName.value,
            comments: [],
            commentsCount: 0
        };
        this.itemsList.push(item);
        localStorage.setItem('items', JSON.stringify(this.itemsList));
        this.itemName.setValue(null);
    }

    onDelete(id: number) {
        this.itemsList = this.itemsList.filter(el => el.id !== id);
        localStorage.setItem('items', JSON.stringify(this.itemsList));
    }
}
