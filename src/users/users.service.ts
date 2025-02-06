import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    private users = [
        {
            id: 1,
            name: 'Juan Toro',
            phone: '1234567890',
        },
        {
            id: 2,
            name: 'Caterina matus',
            phone: '0987654321'
        },
    ];

    getUsers() {
        return this.users;
    }
}
