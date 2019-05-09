import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

export class InitService {

    private secretKey = 'kitties';

    private users = [
        {
            username: 'admin',
            password: CryptoJS.AES.encrypt('admiin', this.secretKey).toString()
        }
    ];

    private items = [
        {
            'id': 1,
            'name': 'First item with custom name',
            'comments': [],
            'commentsCount': 0
        },
        {
            'id': 2,
            'name': 'Second item is active',
            'comments': [
                {
                    'text': `Lorem ipsum dolor sit amet, consectetur adipiscing 
                    elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
                    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
                    occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim 
                    id est laborum.`,
                    'color': '#375E97'
                },
                {
                    'text': `Vel pretium lectus quam id. Eget duis at tellus at. Sapien pellentesque 
                habitant morbi tristique. Ac placerat vestibulum lectus mauris ultrices eros. Justo 
                laoreet sit amet cursus sit amet dictum. Quisque sagittis purus sit amet volutpat consequat.
                 Nec ullamcorper sit amet risus nullam eget felis eget. Ultrices mi tempus imperdiet nulla 
                 malesuada pellentesque. Id nibh tortor id aliquet lectus proin nibh nisl. Tellus cras adipiscing
                  enim eu. Amet cursus sit amet dictum sit amet justo donec enim. Tortor dignissim convallis 
                  aenean et tortor at risus viverra. Nulla posuere sollicitudin aliquam ultrices sagittis orci 
                  a scelerisque purus. Massa vitae tortor condimentum lacinia quis. Ut pharetra sit amet aliquam
                   id diam maecenas ultricies. Leo urna molestie at elementum eu facilisis sed. Accumsan in nisl
                    nisi scelerisque eu. Mattis pellentesque id nibh tortor id aliquet lectus proin nibh.`,
                    'color': '#943045'
                },
                {
                    'text': 'Small comment',
                    'color': '#943045'
                }
            ],
            'commentsCount': 3
        }
    ];

    private lastSelected = 2;

    constructor() { }

    init() {
        if (!localStorage.getItem('users')) {
            localStorage.setItem('users', JSON.stringify(this.users));
            localStorage.setItem('items', JSON.stringify(this.items));
            localStorage.setItem('lastSelected', JSON.stringify(this.lastSelected));
        }

        return new Promise(resolve => resolve(true));
    }
}
