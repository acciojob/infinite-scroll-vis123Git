// Get the list element
const list = document.getElementById('infi-list');

// Initialize the item count
let itemCount = 0;

// Function to add a new list item
function addListItem() {
    itemCount++;
    const li = document.createElement('li');
    li.textContent = `List item ${itemCount}`;
    list.appendChild(li);
}

// Function to add initial 10 items
function addInitialItems() {
    for (let i = 0; i < 10; i++) {
        addListItem();
    }
}

// Function to check if scrolled to bottom of the list
function isScrolledToBottom() {
    return list.scrollTop + list.clientHeight >= list.scrollHeight - 5;
}

// Function to add more items when scrolled to bottom
function addMoreItems() {
    if (isScrolledToBottom()) {
        addListItem();
        addListItem();
    }
}

// Add initial items
addInitialItems();

// Add scroll event listener to the list element
list.addEventListener('scroll', addMoreItems);