import React, { useState } from "react";
import { Tree } from "antd";
const { TreeNode } = Tree;
import { DownOutlined } from "@ant-design/icons";
import { faHouse, faRoad, faQuestion, faMapMarkedAlt } from "@fortawesome/free-solid-svg-icons";

import { DecoratedCircle } from "../../utils/decorated-fa-icons";

const PoiTree = ({ hierarchy, setHierarchy }) => {
    if (Object.keys(hierarchy).length === 0) {
        return <></>;
    }

    let checkedKeys = [];
    const [expandedKeys, setExpandedKey] = useState([hierarchy.id.toString()]);

    let poiNumber = 1; // TODO: Use some kind of rank property in the JSON struct
    const renderTreeNodes = (data) =>
        data.map((item) => {
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
        console.log("selected", selectedKeys, info);
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
        >
            {renderTreeNodes([hierarchy])}
        </Tree>
    );
};

export default PoiTree;
