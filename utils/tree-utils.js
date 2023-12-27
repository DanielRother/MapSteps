export function replaceObjectById(tree, id, replacement) {
    if (tree.id === id) {
        return replacement;
    }

    for (const key in tree) {
        if (typeof tree[key] === "object") {
            tree[key] = replaceObjectById(tree[key], id, replacement);
        }
    }

    return tree;
}

export function findObjectById(tree, id) {
    if (tree == null) {
        return null;
    }

    if (tree.id === id) {
        return tree;
    }

    if (tree.steps) {
        for (let i = 0; i < tree.steps.length; i++) {
            const foundObject = findObjectById(tree.steps[i], id);

            if (foundObject) {
                return foundObject;
            }
        }
    }

    return null;
}

export function findParent(tree, id) {
    if (tree.id === id) {
        return null; // The root object has no parent
    }

    function searchParent(currentNode) {
        if (currentNode.steps) {
            for (let i = 0; i < currentNode.steps.length; i++) {
                const currentChild = currentNode.steps[i];
                if (currentChild.id === id) {
                    return currentNode; // Found the parent
                } else {
                    const foundParent = searchParent(currentChild);
                    if (foundParent) {
                        return foundParent; // Found the parent in a child subtree
                    }
                }
            }
        }
        return null; // The object with the given id wasn't found in this subtree
    }

    return searchParent(tree, id);
}

export function addStep(tree, parent, step, position) {
    if (parent.hasOwnProperty("steps")) {
        if (position == 0) {
            parent.steps.unshift(step);
        } else if (position == 1) {
            parent.steps.push(step);
        }
        // dropNode.steps.splice(position, 0, dragNode);
    } else {
        parent.steps = [];
        parent.steps.push(step);
    }
    tree = replaceObjectById(tree, parent.id, parent);

    return tree;
}

export function findMaxValue(tree, property) {
    let max = -Infinity;

    // Recursive helper function to traverse the object tree
    function traverse(obj) {
        for (let key in obj) {
            if (typeof obj[key] === "object") {
                traverse(obj[key]);
            } else if (obj.hasOwnProperty(property)) {
                max = Math.max(max, obj[property]);
            }
        }
    }

    traverse(tree);
    return max;
}

export function countSteps(tree) {
    let count = 0;

    // Recursive helper function to traverse the object tree
    function traverse(obj) {
        for (let key in obj) {
            if (typeof obj[key] === "object") {
                if (key !== "steps") {
                    count++;
                }
                traverse(obj[key]);
            }
        }
    }

    traverse(tree);
    return count;
}

export function removeStep(tree, node) {
    function removeEntryById(array, id) {
        const index = array.findIndex((obj) => obj.id === id);
        if (index !== -1) {
            array.splice(index, 1);
        }
        return array;
    }

    let id = node.id;
    let parent = findParent(tree, id);
    parent.steps = removeEntryById(parent.steps, id);
    if (parent.steps.length == 0) {
        delete parent.steps;
    }

    return tree;
}
