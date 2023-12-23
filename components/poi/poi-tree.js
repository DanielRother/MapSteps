import React, { useState } from "react";

import { Tree } from "antd";

import { DownOutlined } from "@ant-design/icons";
import { faHouse, faMapMarkedAlt, faQuestion, faRoad } from "@fortawesome/free-solid-svg-icons";

import { DecoratedCircle } from "../../utils/decorated-fa-icons";

const { TreeNode } = Tree;

const PoiTree = ({ hierarchy, setHierarchy, setSelectedSubHierarchy }) => {
    if (Object.keys(hierarchy).length === 0) {
        return <></>;
    }

    let checkedKeys = [];
    const [expandedKeys, setExpandedKey] = useState([hierarchy.id.toString()]);

    let poiNumber = 1; // TODO: Use some kind of rank property in the JSON struct
    const renderTreeNodes = (data) =>
        data.map((item) => {
            if (item == null) {
                return;
            }

            let icon;
            let title = item.name;
            switch (item.type) {
                case "Home":
                    icon = <DecoratedCircle icon={faHouse} color={item.color} />;
                    break;
                case "POI":
                    icon = <DecoratedCircle number={poiNumber++} color={item.color} />;
                    break;
                case "Routing":
                    icon = <DecoratedCircle icon={faRoad} color={item.color} />;
                    break;
                case "Stage":
                    icon = <DecoratedCircle icon={faMapMarkedAlt} color={item.color} />;
                    if (item.hasOwnProperty("start")) {
                        title = item.start + " - " + item.name;
                    }
                    break;
                default:
                    icon = <DecoratedCircle icon={faQuestion} color={item.color} />;
                    break;
            }
            if (item.steps) {
                return (
                    <TreeNode title={title} dataRef={item} icon={icon} key={item.id.toString()}>
                        {renderTreeNodes(item.steps)}
                    </TreeNode>
                );
            }
            // Only add leaf nodes to the list. Parents will be calculated automatically
            if (item.enabled) {
                checkedKeys.push(item.id.toString());
            }
            return <TreeNode title={title} dataRef={item} show icon={icon} key={item.id.toString()} {...item} />;
        });

    const onSelect = (selectedKeys, info) => {
        if (setSelectedSubHierarchy != undefined) {
            setSelectedSubHierarchy(info.node.dataRef);
        }
    };

    const onExpand = (expandedKeys) => {
        console.log("expanded", expandedKeys);
        setExpandedKey(expandedKeys);
    };

    function onCheck(checkedKeys, info) {
        console.log("onCheck", checkedKeys, info);
        const dataRef = info.node.dataRef;

        function setEnableToChildren(tree, enabled) {
            tree.enabled = enabled;
            if (tree.hasOwnProperty("steps")) {
                tree.steps.forEach((step) => {
                    step = setEnableToChildren(step, enabled);
                });
            }

            return tree;
        }

        function replaceObjectById(tree, id, replacement) {
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

        let newPoi = setEnableToChildren({ ...dataRef }, info.checked);
        let newHierarchy = replaceObjectById({ ...hierarchy }, dataRef.id, newPoi);
        // console.log("newH", newHierarchy);
        setHierarchy(newHierarchy);
    }

    const onDragEnter = (info) => {
        console.log("onDragEnter", info);
        // expandedKeys, set it when controlled is needed
        // setExpandedKeys(info.expandedKeys)
    };
    const onDrop = (info) => {
        function findObjectById(tree, id) {
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

        function removeNodeFromOldPosition(tree, node) {
            function findParent(tree, id) {
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

        function addNodeToNewPosition(tree, dropNode, dragNode, position) {
            function replaceObjectById(tree, id, replacement) {
                if (tree != null && tree.id === id) {
                    return replacement;
                }

                for (const key in tree) {
                    if (typeof tree[key] === "object") {
                        tree[key] = replaceObjectById(tree[key], id, replacement);
                    }
                }

                return tree;
            }

            if (dropNode.hasOwnProperty("steps")) {
                if (position == 0) {
                    dropNode.steps.unshift(dragNode);
                } else if (position == 1) {
                    dropNode.steps.push(dragNode);
                }
                // dropNode.steps.splice(position, 0, dragNode);
            } else {
                dropNode.steps = [];
                dropNode.steps.push(dragNode);
            }
            tree = replaceObjectById(tree, dropNode.id, dropNode);

            return tree;
        }

        // console.log("onDrop", info);

        const dropKey = parseInt(info.node.key);
        const dragKey = parseInt(info.dragNode.key);
        // console.log("dropKey", dropKey);
        // console.log("dragKey", dragKey);

        let newHierarchy = { ...hierarchy };
        let dropNode = findObjectById(newHierarchy, dropKey);
        let dragNode = findObjectById(newHierarchy, dragKey);
        // console.log("dropNode", dropNode);
        // console.log("dragNode", dragNode);

        const dropPos = info.node.pos.split("-");
        const dropPosition = info.dropPosition - Number(dropPos[dropPos.length - 1]);

        // Delete at old position
        newHierarchy = removeNodeFromOldPosition(newHierarchy, dragNode);
        // console.log("newH remove", newHierarchy);

        // Add to new position
        newHierarchy = addNodeToNewPosition(newHierarchy, dropNode, dragNode, dropPosition);
        // console.log("newH add", newHierarchy);

        setHierarchy(newHierarchy);
    };

    return (
        <Tree
            onSelect={onSelect}
            onCheck={(checkedKeys, info) => {
                onCheck(checkedKeys, info);
            }}
            onExpand={onExpand}
            checkable
            defaultCheckedKeys={checkedKeys}
            defaultExpandedKeys={expandedKeys}
            showIcon
            showLine
            switcherIcon={<DownOutlined />}
            draggable
            //   blockNode
            onDragEnter={onDragEnter}
            onDrop={onDrop}
        >
            {renderTreeNodes([hierarchy])}
        </Tree>
    );
};

export default PoiTree;
