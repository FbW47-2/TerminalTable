# TerminalTable
Terminal Table Example for class FbW47-2

         BeispielTabelle

| ID | Vorname | E-Mail           |
|----|---------|------------------|
| 1  | Sven    | sven@beispiel.de |

```js
const columns =
[
    {
        title: 'ID',
        key: 'id',
        width: 5
    },
    {
        title: 'Vorname',
        key: 'name',
        width: 25
    },
    {
        title: 'E-Mail',
        key: 'email',
        width: 25
    },
]

const rows =
[
    {
        id: 1,
        name: "Sven",
        email: "sven@beispiel.de"
    }
]
```
