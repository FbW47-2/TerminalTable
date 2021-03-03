
const Table = require('./table');

const columns = 
[
    {
        key: 'id',
        title: 'ID',
        width: 10
    },
    {
        key: 'name',
        title: 'Name',
        width: 25
    },
    {
        key: 'role',
        title: 'Role',
        width: 30
    },
    {
        key: 'email',
        title: 'E-Mail',
        width: 50
    }
];

const rows =
[
    {
        id: 1,
        name: 'Herbert',
        role: 'Admin',
        email: 'test@example.com'
    },
    {
        id: 2,
        name: 'Stefan',
        role: 'Moderator',
        email: ''
    },
    {
        id: 3,
        name: 'John',
        role: 'Moderator',
        email: 'ich@du.de'
    }
]

const table = new Table({ 
    columns: columns,
    rows: rows
});
// table.setTitle("Unsere Tabelle");
// table.setWidth(100);
// table.setColumns(columns);
// table.setRows(rows);

table.showTable();
