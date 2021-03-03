
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
    constructor()
    {
        this.tableTitle = 'Default Table';
        this.tableWidth = process.stdout.columns;
        this.tableColumns = [];
        this.tableRows = [];
    }

    setTitle = (title) => this.tableTitle = title;
    setWidth = (width) => this.tableWidth = width;
    setColumns = (columns) => this.tableColumns = columns;
    setRows = (rows) => this.tableRows = rows;

    /**
     * @method createTitle();
     * @description Eine Methode um unseren Titel zu erstellen
     */
    createTitle = () =>
    {
        const padding = Math.round((this.tableWidth - this.tableTitle.length) / 2);

        return `\n${ " ".repeat(padding) }${ this.tableTitle }${ " ".repeat(padding) }`;
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
        let width = this.tableWidth;

        this.tableColumns.forEach((column, i) =>
        {
            if(this.tableColumns.length === i + 1)
            {
                // problem mit width + 2 oder - 1;
                tempString += this.createColumn(column.title, width + 2);
            }
            else
            {
                tempString += this.createColumn(column.title, column.width);
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
        let width = this.tableWidth;

        this.tableColumns.forEach((column, i) =>
        {
            if(this.tableColumns.length === i + 1)
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
    createRow = (rowContent) =>
    {
        let tempString = "|";
        
        for(let prop in rowContent)
        {
            let width = this.tableWidth;

            this.tableColumns.forEach((column, i) =>
            {
                if(column.key === prop) // key = "id" => tableRows[0]["id"];
                {
                    if(this.tableColumns.length === i + 1)
                    {
                        tempString += this.createColumn(rowContent[prop], width + 2);
                    }
                    else
                    {
                        tempString += this.createColumn(rowContent[prop], column.width);
                    }
                }

                width -= column.width;
            })
        }

        return tempString;
    }

    /**
     * @method showTable();
     * @description Eine Methode um unsere Tabelle anzuzeigen
     */
    showTable = () =>
    {
        console.log(this.createTitle());
        console.log(this.createHeader());
        console.log(this.createDivider());

        this.tableRows.forEach((row, i) =>
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
