export class categoriesService {
    static getAllCategories() {
        return fetch('http://localhost:51111/categories')
            .then(result => result.json());
    }

    static deleteCategory(id) {
        return fetch(`http://localhost:51111/categories/${id}`, {
            method: 'DELETE',
        });
    }

    static addCategory(name, flags) {
        return fetch(`http://localhost:51111/categories`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({
                name,
                flags
            })
        });
    }
}

