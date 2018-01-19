export const unresolvedFloors = {
    "type": "array",
    "minItems": 10,
    "maxItems": 100,
    "items": {
        "type": "object",
        "properties": {
            "label": {
                "type": "string",
                "chance": "word"
            },
            "value": {
                "type": "string",
                "faker": "random.uuid"
            }
        },
        required: ['label', 'value']
    }
}
