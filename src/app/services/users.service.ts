import { Injectable } from '@angular/core';
import { ENG } from '../components/translations/english';
import { IUser } from '../models/users';

@Injectable({
    providedIn: 'root'
})
export class UsersService {
    public errors: any[] = []
    public errorMessages = ENG.COMMON.ERRORS
    public userExist: boolean = false;
    public failedAttempts: number = 0;
    public succesfull: boolean = false

    public saveUsers({ username, password, confirmPassword }: IUser) {
        this.errors = []
        this.validateData(username, 'username');
        this.validateData(password, 'password');
        this.validatePassword(password, confirmPassword, 'confirm_password');
        if (this.errors.length === 0 && this.checkUsersExist(username, password) == true) {
            let usersData: any = window.localStorage.getItem('usersList');
            let users = JSON.parse(usersData);
            if (Array.isArray(users) && users.length > 0) {
                users.push({ username, password, confirmPassword });
                window.localStorage.setItem('usersList', JSON.stringify(users));
            } else {
                window.localStorage.setItem('usersList', JSON.stringify([{ username, password, confirmPassword }]))
            }
            this.succesfull = true

        }
    }

    public checkUsersExist(username: string, password: string) {
        this.errors = [];
        let usersData: any = localStorage.getItem('usersList');
        let users = JSON.parse(usersData);
        if (Array.isArray(users) && users.length > 0) {
            let user = users.filter(element => {
                return element.username === username && element.password === password
            })
            if (user.length > 0) {
                this.errors.push({ field: 'exist_user', error: this.errorMessages.EXIST_USER });
                return this.userExist = false;
            } else {
                return this.userExist = true
            }

        } else {
            return this.userExist = true
        }
    }

    public validateData(username: string, field: string) {
        if (username === ' ' || username == undefined || username === '') {
            this.errors.push({ field, error: this.errorMessages.FAILED })
        }

    }
    public validatePassword(password: string, confirm_password: string, field: string) {
        if (password !== confirm_password) {
            this.errors.push({ field: 'not-match', error: this.errorMessages.NOT_MATCH })
        }
    }

    public getErrors() {
        return this.errors;
    }


    public login(username: string, password: string) {
        this.errors = [];
        this.validateData(username, 'username');
        this.validateData(password, 'password');
        if (this.errors.length === 0) {
            this.checkUsersExist(username, password);
            if (this.errors[0].field === 'exist_user' && this.userExist == false) {
                this.succesfull = true
            } else {
                this.succesfull = false;
                this.errors.push({ field: 'message', error: this.errorMessages.EXIST_USER })
            }
        } else {
            this.succesfull = false
        }
    }

    public recoverPassword(username: string, newPassword: string) {
        this.errors = [];
        this.validateData(newPassword, 'password');
        this.validateData(username, 'username');
        console.log(this.errors);

        if (this.errors.length == 0) {
            let usersData: any = localStorage.getItem('usersList');
            let users = JSON.parse(usersData);

            if (Array.isArray(users) && users.length > 0) {
                let i = 0
                let user = users.find(element => {
                    if (element.username === username) {
                        return element.username === username
                    } else {
                        return i++
                    }
                })
                if (typeof user === 'object') {
                    if (this.errors.length === 0) {
                        user.password = newPassword;
                        user.confirmPassword = newPassword
                        usersData = JSON.parse(usersData)
                        usersData[i] = user
                        usersData = JSON.stringify(usersData);
                        localStorage.setItem('usersList', usersData)
                    }

                } else {
                    this.errors.push({ field: 'message', error: this.errorMessages.MESSAGE });
                }
            }
        }

    }
}
