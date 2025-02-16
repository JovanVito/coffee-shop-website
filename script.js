// Dark Mode Toggle
document.getElementById("dark-mode-toggle").addEventListener("change", function () {
    document.body.classList.toggle("dark-mode");
});

// Sorting Tabel
function sortTable(n) {
    let table = document.getElementById("coffeeTable");
    let rows = Array.from(table.rows).slice(1);
    let sorted = rows.sort((rowA, rowB) => {
        let cellA = rowA.cells[n].innerText.toLowerCase();
        let cellB = rowB.cells[n].innerText.toLowerCase();
        return cellA.localeCompare(cellB);
    });

    sorted.forEach(row => table.appendChild(row));
}

// Pencarian di tabel
function searchTable() {
    let input = document.getElementById("search").value.toLowerCase();
    let rows = document.querySelectorAll("#coffeeTable tbody tr");

    rows.forEach(row => {
        let text = row.innerText.toLowerCase();
        row.style.display = text.includes(input) ? "" : "none";
    });
}
