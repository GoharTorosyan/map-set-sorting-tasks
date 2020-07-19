class Dictionary {
    constructor(defaultValue) {
        let normalizedValues = Object.entries(defaultValue).map(([key, value]) => {
            return [key, new Set([value])];
        });
        this.dict = new Map(normalizedValues);
    }

    add(key, value) {
        if (this.dict.has(key)) {
            this.dict.get(key).add(value);
        } else {
            this.dict.set(key, new Set([value]));
        }
    }

    get(key) {
        return this.dict.get(key);
    }
    remove(key) {
        this.dict.delete(key);
    }
    getCountByKey(key) {
        return this.dict.get(key).size;
    }
}

let dictionary = new Dictionary({ key: "value", secondKey: "value2" });

dictionary.add("num", 7);
dictionary.add("num1", 12);
dictionary.add("num", 5);
console.log(dictionary.get("num"));
