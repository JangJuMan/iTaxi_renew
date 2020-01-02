import { observable, computed } from 'mobx';
import { asyncAction } from 'mobx-utils';
import axios from 'axios';
import * as FileSystem from 'expo-file-system';
import { DATABASE } from '../info';

export default class UserStore {

    static loginInfoFileUri = FileSystem.cacheDirectory + "loginInfo";
    static user_id = "";
    static user;
    static log;

    static async autoLogin() {
        const info = await FileSystem.getInfoAsync(this.loginInfoFileUri);
        if (info.exists) {
            return FileSystem.readAsStringAsync(this.loginInfoFileUri)
                .then(content => {
                    const data = JSON.parse(content);
                    return data;
                });
        }
        return null;
    }

    static async setAutoLogin(loginData) {
        await FileSystem.writeAsStringAsync(this.loginInfoFileUri, JSON.stringify(loginData));
    }

    static async resetAutoLogin() {
        const info = await FileSystem.getInfoAsync(this.loginInfoFileUri);
        if (info.exists)
            await FileSystem.deleteAsync(this.loginInfoFileUri);
    }

    static async login(id, password) {
        try {
            let result = await axios.post(`${DATABASE}/user`, {
                id: id,
                password: password
            }).catch(error => {
                console.log("error: %o", error);
            });
            console.log(result)
            this.userId = result.data._id;
            // userId 전달을 위해
            this.user_id = result.data._id;
            return result.data;
        }
        catch (error) {
            throw error;
        }
    }

    static async getUser() {
        try {
            let result = await axios.get(`${DATABASE}/user/${this.userId}`);
            this.user = result.data;
            return this.user;
        }
        catch (error) {
            throw error;
        }
    }

    static async updateUser(data) {
        try {
            let result = await axios.patch(`${DATABASE}/user/${this.userId}`, data);
            this.user = result.data;
        }
        catch (error) {
            throw error;
        }
    }

    // TODO:
    @asyncAction
    static * getLog() {
        try {
            let result = yield axios.get(`${DATABASE}/log/${user_id}`);
            this.log = result.data; 
        }
        catch (error) {
            console.log(JSON.stringify(error));
            this.errorData = error.message;
        }
    }
}