import React, { useState } from "react";
import { useTranslation } from "next-i18next";
import { Modal, Form, Checkbox, Input, Radio, InputNumber, DatePicker } from "antd";

import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
dayjs.extend(customParseFormat);
const dateFormat = "YYYY-MM-DD";

const StepForm = ({ open, editStep, parentStep, onSave, onCancel }) => {
    const [form] = Form.useForm();
    const { t } = useTranslation();
    const [coordinatesRequired, setCoordinatesRequired] = useState(true);
    const [userLocation, setUserLocation] = useState({ lat: null, lon: null });

    const onTypeChange = (value) => {
        console.log("onTypeChange", value);
        switch (value.target.value) {
            case "POI":
                setCoordinatesRequired(true);
                break;
            case "Home":
                setCoordinatesRequired(true);
                break;
            case "Routing":
                setCoordinatesRequired(true);
                break;
            case "Stage":
                setCoordinatesRequired(false);
                break;
            default:
        }
    };

    // Not completely sure why, but the state have to be set after the component was loaded
    // (I thing this is somehow related to how antd reuses modals...)
    function afterOpenChange(open) {
        if (open) {
            setCoordinatesRequired(editStep?.type != "Stage");

            if (coordinatesRequired) {
                const geoOptions = {
                    enableHighAccuracy: true,
                    timeout: 5000,
                    maximumAge: 0,
                };
                navigator.geolocation.getCurrentPosition(
                    (pos) => {
                        setUserLocation({ lat: pos.coords.latitude, lon: pos.coords.longitude });
                    },
                    () => {
                        console.warn(`ERROR(${err.code}): ${err.message}`);
                    },
                    geoOptions,
                );
            } else {
                setUserLocation({ lat: null, lon: null });
            }
        }
    }

    const title = editStep != null ? "Edit step" : "Create step";

    let currentStart = null;
    let currentLat = null;
    let currentLon = null;
    if (editStep != null) {
        currentStart = editStep?.start ? dayjs(editStep.start, dateFormat) : null;
        currentLat = editStep?.lat;
        currentLon = editStep?.lon;
    } else {
        currentStart = dayjs();
        currentLat = parentStep?.lat ?? userLocation.lat;
        currentLon = parentStep?.lon ?? userLocation.lon;
    }

    return (
        <Modal
            open={open}
            title={title}
            okText="Save"
            cancelText="Cancel"
            onCancel={onCancel}
            onOk={() => {
                form.validateFields()
                    .then((values) => {
                        form.resetFields();
                        let expandedValues = { ...values };
                        expandedValues.parentStep = parentStep;
                        onSave(expandedValues);
                    })
                    .catch((info) => {
                        console.log("Validate Failed:", info);
                    });
            }}
            afterOpenChange={afterOpenChange}
        >
            <Form
                form={form}
                layout="vertical"
                name="form_in_modal"
                // preserve={false}
                fields={[
                    {
                        name: ["name"],
                        value: editStep?.name,
                    },
                    {
                        name: ["parentName"],
                        value: parentStep?.name,
                    },
                    {
                        name: ["type"],
                        value: editStep?.type ?? "POI",
                    },
                    {
                        name: ["start"],
                        value: currentStart,
                    },
                    {
                        name: ["address"],
                        value: editStep?.address,
                    },
                    {
                        name: ["lat"],
                        value: currentLat,
                    },
                    {
                        name: ["lon"],
                        value: currentLon,
                    },
                    {
                        name: ["enabled"],
                        value: editStep?.enabled ?? true,
                    },
                ]}
            >
                <Form.Item
                    name="name"
                    label="Name"
                    rules={[
                        {
                            required: true,
                            message: "Please input the name of the step!",
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item name="parentName" label="Parent">
                    <Input disabled={true} />
                </Form.Item>
                <Form.Item
                    name="type"
                    label="Type"
                    rules={[
                        {
                            required: true,
                            message: "Please specify the type of the step!",
                        },
                    ]}
                >
                    <Radio.Group buttonStyle="solid" onChange={onTypeChange}>
                        <Radio.Button value="POI">{t("POI")}</Radio.Button>
                        <Radio.Button value="Stage">{t("Stage")}</Radio.Button>
                        <Radio.Button value="Home">{t("Home")}</Radio.Button>
                        <Radio.Button value="Routing">{t("Routing")}</Radio.Button>
                    </Radio.Group>
                </Form.Item>
                <Form.Item name="start" label={t("Date")}>
                    <DatePicker />
                </Form.Item>
                {/* TODO: Only required for POIs */}
                <Form.Item
                    name="lat"
                    label={t("Latitude")}
                    rules={[
                        {
                            required: coordinatesRequired,
                            message: "Please specify the latitude of the step!",
                        },
                    ]}
                >
                    <InputNumber
                        min={-90}
                        max={90}
                        step={0.01}
                        style={{
                            width: "100%",
                        }}
                    />
                </Form.Item>
                <Form.Item
                    name="lon"
                    label={t("Longitude")}
                    rules={[
                        {
                            required: coordinatesRequired,
                            message: "Please specify the longitude of the step!",
                        },
                    ]}
                >
                    <InputNumber
                        min={-180}
                        max={180}
                        step={0.01}
                        style={{
                            width: "100%",
                        }}
                    />
                </Form.Item>
                <Form.Item name="address" label={t("Address")}>
                    <Input type="textarea" />
                </Form.Item>
                <Form.Item name="enabled" valuePropName="checked" label={t("Enabled?")}>
                    <Checkbox />
                </Form.Item>
                {/* TODO: Place picker */}
            </Form>
        </Modal>
    );
};

export default StepForm;
