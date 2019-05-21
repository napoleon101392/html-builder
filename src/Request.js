const Request = {
    get: (url) => fetch(url),
}

export async function todos() {
    var http = Request;
    var request = "https://jsonplaceholder.typicode.com/todos";

    try {
        var data = await http.get(request);

        return data.json();
    } catch (error) {
        return error;
    }
}
