export class User {
    username: string;
    email: string;
    password: string;
    role : string;
    created_by : number

    constructor() {
        this.username = '';
        this.email = '';
        this.password = '';
        this.role = 'User',
        this.created_by = 0
    }
}
