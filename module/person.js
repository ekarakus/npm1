export default class person {
    person(name, age) {
        this._name = name
        this._age = age
    }
    get name() {
        return this._name
    }
    set name(value) {
        this._name = name
    }
}