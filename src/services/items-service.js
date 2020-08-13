export class itemsService {
    static getAllItems() {
        return fetch('http://localhost:51111/items')
            .then(result => result.json());
    }

    static deleteItem(id) {
        return fetch(`http://localhost:51111/items/${id}`, {
            method: 'DELETE',
        });
    }

    static addItem(name, parentId, flags) {
        return fetch(`http://localhost:51111/items`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({
                name,
                flags,
                parentId
            })
        });
    }
}

