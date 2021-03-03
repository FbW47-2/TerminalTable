
/**
 * @class Table
 * @description 
 * Ein programm zum erstellen von Tabellen in der Konsole.
 */
class Table
{
    /**
     * @constructor
     */
    constructor({ title, width, columns, rows } = {})
    {
        this.title = title || 'Default Table';
        this.width = width || process.stdout.columns;
        this.columns = columns || [];
        this.rows = rows || [];
    }

    setTitle = (title) => this.title = title;
    setWidth = (width) => this.width = width;
    setColumns = (columns) => this.columns = columns;
    setRows = (rows) => this.rows = rows;

    /**
     * @method createTitle();
     * @description Eine Methode um unseren Titel zu erstellen
     * @returns { string }
     */
    createTitle = () =>
    {
        const padding = Math.round((this.width - this.title.length) / 2);

        return `\n${ " ".repeat(padding) }${ this.title }${ " ".repeat(padding) }`;
    }

    /**
     * @method createColumn
     * @description Eine Methode um unsere columns (Spalten) zu erstellen
     * @return { string }
     */
    createColumn = (text, width) =>
    {
        const restWidth = width - text.toString().length || 20;

        return ` ${ text.toString() }${ " ".repeat(restWidth - 3) }|`;
    }

    /**
     * @method createHeader();
     * @description Eine Methode um unseren header zu erstellen
     * @returns { string }
     */
    createHeader = () =>
    {
        let tempString = "|";
        let width = this.width;

        this.columns.forEach((column, i) =>
        {
            if(this.columns.length === i + 1)
            {
                // problem mit width + 2 oder - 1;
                tempString += this.createColumn(column.title, width + 2);
                // ergibt:
                //  Role                                                            |
            }
            else
            {
                tempString += this.createColumn(column.title, column.width);
                // ergibt:
                //  ID     |
                //  Name                  |
            }

            width -= column.width;
        });

        return tempString;
    }

    /**
     * @method createDivider();
     * @description Eine Methode um unseren divider zu erstellen
     * @returns { string }
     */
    createDivider = () => 
    {
        let tempString = "|";
        let width = this.width;

        this.columns.forEach((column, i) =>
        {
            if(this.columns.length === i + 1)
            {
                tempString += "-".repeat(width) + "|";
            }
            else
            {
                tempString += "-".repeat(column.width - 2 || 20) + "|";
            }

            width -= column.width;
        });

        return tempString;
    }

    /**
     * @method createRow();
     * @description Eine Methode um unsere rows (Zeilen) zu erstellen.
     * @param { object } rowContent - Der inhalt jedes row-objects.
     * @returns { string }
     */
    createRow = (row) =>
    {
        let tempString = "|";
        
        for(let key in row)
        {
            let width = this.width;

            this.columns.forEach((column, i) =>
            {
                if(column.key === key) // key = "id" => tableRows[0]["id"];
                {
                    if(this.columns.length === i + 1)
                    {
                        tempString += this.createColumn(row[key], width + 2);
                    }
                    else
                    {
                        tempString += this.createColumn(row[key], column.width);
                    }
                }

                width -= column.width;
            })
        }

        return tempString;
    }

    /**
     * @method showTable();
     * @description Eine Methode um unsere Tabelle anzuzeigen - unsere Initialisierungsmethode.
     */
    showTable = () =>
    {
        console.log(this.createTitle());
        console.log(this.createHeader());
        console.log(this.createDivider());

        this.rows.forEach((row, i) =>
        {
            console.log(this.createRow(row));
        });
    }
}

/**
 * @exports
 * @description exportiert die Klasse Table für die externe benutzung.
 */
module.exports = Table;
