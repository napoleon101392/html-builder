export const Table = {
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
