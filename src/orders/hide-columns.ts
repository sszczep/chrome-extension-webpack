
export const hideColumns = () => {
    const columnsToHide = [5, 6, 7];
    const table = document.querySelector('.table-condensed');
    if (!table) return;

    // Loop through each row in the table
    table.querySelectorAll('tr').forEach((row) => {
        // Note: row.children is a HTMLCollection (0-based indexing)
        columnsToHide.forEach((colIndex) => {
            const cell = row.children[colIndex] as HTMLElement;
            if (cell) {
                cell.style.display = 'none';
            }
        });
    });
};