import { Table } from "./Table";

export const Html = {
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
