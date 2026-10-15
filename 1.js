const userItems = ["api", "user", "api", "login", "user", "cloud"];

function firstUnique(items) {
  for (let i = 0; i < items.length; i++) {
    const currentItem = items[i];
    if (items.indexOf(currentItem) === items.lastIndexOf(currentItem)) {
      return currentItem;
    }
  }
}

console.log (firstUnique(userItems));
