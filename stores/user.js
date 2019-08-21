import { observable, computed } from 'mobx';
import { asyncAction } from 'mobx-utils';
import axios from 'axios';
import * as FileSystem from 'expo-file-system';
import { DATABASE } from '../info';

export default class UserStore {

    loginInfoFileUri = FileSystem.cacheDirectory + "loginInfo";

    async autoLogin() {
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

    async setAutoLogin(loginData) {
        await FileSystem.writeAsStringAsync(this.loginInfoFileUri, JSON.stringify(loginData));
    }

    async resetAutoLogin() {
        const info = await FileSystem.getInfoAsync(this.loginInfoFileUri);
        if (info.exists)
            await FileSystem.deleteAsync(this.loginInfoFileUri);
    }

    async login(id, password) {
        try {
            let result = await axios.post(`${DATABASE}/user`, {
                id: id,
                password: password
            });
            console.log(result)
            this.userId = result.data._id;
            return result.data;
        }
        catch (error) {
            throw error;
        }
    }

    async getUser() {
        try {
            let result = await axios.get(`${DATABASE}/user/${this.userId}`);
            this.user = result.data;
            return this.user;
        }
        catch (error) {
            throw error;
        }
    }

    async updateUser(data) {
        try {
            let result = await axios.patch(`${DATABASE}/user/${this.userId}`, data);
            this.user = result.data;
        }
        catch (error) {
            throw error;
        }
    }

    // TODO
    @asyncAction
    * getLog() {
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