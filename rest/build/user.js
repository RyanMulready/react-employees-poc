export const unresolvedUser =  {
    "type": "object",
    "properties": {
        'permissions': {
            'employees': true,
         },
         'avatar': {
            "type": "string",
            "faker": "image.imageUrl"
         },
         'preferences': {}
    },
    required: ['messages', 'permissions', 'avatar']
}
