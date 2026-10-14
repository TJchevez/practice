
function findDuplicates(items) {

    const seen = [];
    const duplicates = [];

    for (let i = 0; i < items.length; i++) {
      if(seen) {
        return items.length[i];
      }

    }

    return duplicates;
}

console.log(
    findDuplicates(["api", "user", "api", "login", "user", "api"])
);

