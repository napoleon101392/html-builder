function button() {
    const button_text = document.createTextNode('Click');
    const button = document.createElement('button');
    button.appendChild(button_text);

    return button;
}

function Application() {
    const app = document.createElement('div');
    app.classList.add('app');

    return app;
}

const Request = {
    get: (url) => fetch(url),
}

const Table = {
    caption: function(caption) {
        return caption;
    },

    head: function(data) {
        var view = '';

        data.data.forEach(index => {
            view += `<th>${index}</th>`;
        });

        return `<thead id='${data.id}'>${view}</thead>`;
    },

    body: function(data) {
        var view = '';

        data.data.forEach(rows => {
            var table_data = '';            

            rows.forEach(row => {
                table_data += `<td>${row}</td>`;
            });

            view += `<tr>${table_data}</tr>`;            
        });

        return `<tbody id='${data.id}'>${view}</tbody>`;
    },

    foot: function() {
        var view = '';

        return `<tfoot>${view}</tfoot>`;
    }
}

const Html = {
    table: function(response) {
        const head = Table.head({
            id: response.thead.attribute.id,
            data: response.thead.data    
        });

        const body = Table.body({
            id: response.tbody.attribute.id,
            data: response.tbody.data
        });

        return `<table>
            ${head}
            ${body}
        </table>`;
    },
};
