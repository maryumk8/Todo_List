export const handleGet = () => {
    return fetch("http://aqibse.nayatel.net:4450/api/v1/todo/");
};
export const handlePost = (info) => {
    return fetch("http://aqibse.nayatel.net:4450/api/v1/todo/", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(info)
    });
};

export const handlePut = (id, query) => {
    return fetch(`http://aqibse.nayatel.net:4450/api/v1/todo/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ isDone: query })
    });
};

export const handleDelete = (id) => {
    return fetch(`http://aqibse.nayatel.net:4450/api/v1/todo/${id}`, {
        method: "DELETE"
    });
};
