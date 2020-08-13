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
        return fetch('http://localhost:51111/categories', {
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

    static updateCategory(id, name, flags) {
        const params = {};

        if (name && typeof(name) === 'string')  {
            params.name = name;
        }

        if (typeof(flags) === 'string') {
            params.flags = flags;
        }

        return fetch(`http://localhost:51111/categories/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(params),
        });
    }
}

