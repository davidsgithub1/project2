'use strict'

const authQueries = require('../../db/chat/query');
const db = require('../../config/connectionChat').database;
const promise = require('q').Promise;

module.exports = class Room {
    constructor(roomData) {
        this.room_id = roomData.room_id || null,
        this.name = roomData.name || null,
        this.password = roomData.password || null,
        this.updated_at = roomData.updated_at || null,
        this.created_at = roomData.created_at || null;

        this.propertyInfo = {
            room_id: {
                isUpdatable: false,
                isPublic: true
            },
            name: {
                isUpdatable: true,
                isPublic: true
            },
            password: {
                isUpdatable: true,
                isPublic: false
            },
            updated_at: {
                isUpdatable: false,
                isPublic: true
            },
            created_at: {
                isUpdatable: false,
                isPublic: true
            }
        };
    }

    save() {
        return promise((resolve, reject) => {
            db.query(authQueries.insertRoom(this.name, this.password), (err, result) => {
                if (err) return reject(err);

                //no errors means room created
                //get and set this to room created
                this.getById(result.insertId)
                    .then(() => {
                        return resolve(this._toObject());
                    })
                    .catch((err) => {
                        return reject(err);
                    })
            });
        });
    }

    getByName() {
        return promise((resolve, reject) => {
            db.query(authQueries.getRoomByName(this.name), (err, result) => {
                if (err) return reject(err);

                if (!result.length) return reject(404);

                this._set(result[0]);
                return resolve(this._toObject());
            });
        });
    }

    getById(id) {
        return promise((resolve, reject) => {
            db.query(authQueries.getRoomById(id), (err, result) => {
                if (err) return reject(err);

                if (!result.length) return reject(404);

                this._set(result[0]);
                return resolve(this._toObject());
            });
        });
    }

    _toObject() {
        let self = {};

        Object.keys(this).forEach((property) => {
            if (this.propertyInfo[property] && this.propertyInfo[property].isPublic) {
                self[property] = this[property];
            }
        });

        return self;
    }

    _toCreationObject() {
        let self = {};

        Object.keys(this).forEach((property) => {
            if (this.propertyInfo[property] && this.propertyInfo[property].isUpdatable) {
                self[property] = this[property];
            }
        });

        return self;
    }

    _set(jobData) {
        Object.keys(jobData).forEach((property) => {
            this[property] = jobData[property];
        });
    }
};