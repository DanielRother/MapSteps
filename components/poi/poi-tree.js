import React, { useState } from "react";

import { Tree, Popover, Button, Modal } from "antd";

import { DownOutlined, PlusOutlined, EditOutlined, MinusOutlined } from "@ant-design/icons";
import { faHouse, faMapMarkedAlt, faQuestion, faRoad } from "@fortawesome/free-solid-svg-icons";
import { DecoratedCircle } from "../../utils/decorated-fa-icons";

import StepForm from "./step-form";
import {
    findObjectById,
    replaceObjectById,
    findParent,
    addStep,
    findMaxValue,
    countSteps,
    removeStep,
} from "../../utils/tree-utils";

const { TreeNode } = Tree;

const PoiTree = ({ hierarchy, setHierarchy, setSelectedSubHierarchy }) => {
    //#region CRUD steps
    const [openNewStepModal, setOpenNewStepModal] = useState(false);
    const [openEditStepModal, setOpenEditStepModal] = useState(false);
    const [parentStep, setParentStep] = useState(null);
    const [editStep, setEditStep] = useState(null);

    const closeNewModal = () => {
        setOpenNewStepModal(false);
        setParentStep(null);
    };

    const onNewStepSave = (values) => {
        console.log("New, received values of form: ", values);

        let newHierarchy = { ...hierarchy };
        let newParent = { ...findObjectById(newHierarchy, parentStep.id) };
        let color = "#000000";
        switch (values.type) {
            case "POI":
                color = "#20bf6b";
                break;
            case "Stage":
                color = "#3867d6";
                break;
            case "Home":
                color = "#fed330";
                break;
            case "Routing":
                color = "#a5b1c2";
                break;

            default:
                break;
        }

        var newStep = {
            id: findMaxValue(newHierarchy, "id") + 1,
            name: values.name,
            address: values.address,
            lat: values.lat,
            lon: values.lon,
            color: color,
            type: values.type,
            enabled: values.enabled,
        };
        addStep(newHierarchy, newParent, newStep, 1);
        setHierarchy(newHierarchy);

        closeNewModal();
    };

    const closeEditModal = () => {
        setOpenEditStepModal(false);
        setEditStep(null);
        setParentStep(null);
    };

    const onEditStepSave = (values) => {
        console.log("Edit, received values of form: ", values);

        let newHierarchy = { ...hierarchy };
        let newStep = { ...findObjectById(newHierarchy, editStep.id) };

        newStep.name = values.name;
        newStep.type = values.type;
        if (newStep.start != null) {
            newStep.start = values.start.format("YYYY-MM-DD");
        }
        if (newStep.lat != null) {
            newStep.lat = values.lat;
        }
        if (newStep.lon != null) {
            newStep.lon = values.lon;
        }
        newStep.address = values.address;
        newStep.enabled = values.enabled;

        newHierarchy = replaceObjectById(newHierarchy, editStep.id, newStep);
        setHierarchy(newHierarchy);

        closeEditModal();
    };

    const onDeleteStepSave = (item) => {
        console.log("Delete item", item);
        let newHierarchy = { ...hierarchy };
        newHierarchy = removeStep(newHierarchy, item);
        setHierarchy(newHierarchy);
    };

    //#endregion

    //#region Setup Tree
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

            // Setup editing of nodes
            const deleteContent = (item) => {
                return (
                    <>
                        <p>{`Your about to delete the step entitle "${item?.name}".`}</p>
                        <p>
                            <b>{`This will delete ${countSteps(item)} children as well!`} </b>
                        </p>
                        <p style={{ marginTop: 20 }}>{`Continue?`}</p>
                    </>
                );
            };
            const content = (
                <div>
                    <Button
                        type="primary"
                        shape="circle"
                        icon={<PlusOutlined />}
                        onClick={() => {
                            setParentStep(item);
                            setOpenNewStepModal(true);
                        }}
                    />
                    <Button
                        type="primary"
                        shape="circle"
                        icon={<EditOutlined />}
                        style={{ marginLeft: 5 }}
                        onClick={() => {
                            setEditStep(item);
                            setParentStep(findParent(hierarchy, item.id));
                            setOpenEditStepModal(true);
                        }}
                    />
                    <Button
                        type="primary"
                        shape="circle"
                        icon={<MinusOutlined />}
                        style={{ marginLeft: 5 }}
                        onClick={() => {
                            Modal.confirm({
                                title: "Delete step",
                                content: deleteContent(item),
                                onOk: () => onDeleteStepSave(item),
                                onCancel: () => console.log("Delete step canceled"),
                            });
                        }}
                    />
                </div>
            );
            let title = (
                <Popover content={content} placement="right">
                    {item.name}
                </Popover>
            );

            // Setup nodes itself
            let icon;
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
                        title = (
                            <Popover content={content} placement="right">
                                {item.start + " - " + item.name}
                            </Popover>
                        );
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
    //#endregion

    //#region Tree Interaction
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
        newHierarchy = removeStep(newHierarchy, dragNode);
        // console.log("newH remove", newHierarchy);

        // Add to new position
        newHierarchy = addStep(newHierarchy, dropNode, dragNode, dropPosition);
        // console.log("newH add", newHierarchy);

        setHierarchy(newHierarchy);
    };
    //#endregion

    return (
        <>
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
            <StepForm
                open={openNewStepModal}
                parentStep={parentStep}
                onSave={onNewStepSave}
                onCancel={() => {
                    closeNewModal();
                }}
            />
            <StepForm
                open={openEditStepModal}
                parentStep={parentStep}
                editStep={editStep}
                onSave={onEditStepSave}
                onCancel={() => {
                    closeEditModal();
                }}
            />
        </>
    );
};

export default PoiTree;
