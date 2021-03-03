
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

        return ` ${ text.toString() }${ " ".repeat(restWidth - 2) }|`;
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
                tempString += this.createColumn(column.title, width - 1);
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
     * @method showTable();
     * @description Eine Methode um unsere Tabelle anzuzeigen
     */
    showTable = () =>
    {
        console.log(this.createTitle());
        console.log(this.createHeader());
        console.log("Divider");
        console.log("Zeilen");
    }
}

/**
 * @exports
 * @description exportiert die Klasse Table für die externe benutzung.
 */
module.exports = Table;
