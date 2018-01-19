import jsf from 'json-schema-faker';

import { unresolvedFloors } from './floors';
const floors = jsf(unresolvedFloors)

import { unresolvedUser } from './user';
const user = jsf(unresolvedUser)

import { columns } from './columns'
const columnsResolved = jsf(columns)

import { unresolveMobileProviders } from './mobileproviders';
const mobileproviders = jsf(unresolveMobileProviders)

const employees = {
  "type": "array",
  "minItems": 10,
  "maxItems": 100,
  "items": {
    "type": "object",
    "properties": {
      "id": {
        "type": "string",
        "faker": "random.uuid"
      },
      "key": {
        "type": "string",
        "faker": "random.uuid"
      },
      "username": {
        "type": "string",
        "faker": "internet.userName"
      },
      "title": {
        "type": "string",
        "faker": "name.title"
      },
      "firstname": {
        "type": "string",
        "faker": "name.firstName"
      },
      "lastname": {
        "type": "string",
        "faker": "name.lastName"
      },
      "phone": {
        "type": "string",
        "faker": "phone.phoneNumber"
      },
      "extension": {
        "type": "integer",
        "minimum": 1,
        "maximum": 10000
      },
      "mobile": {
        "type": "string",
        "faker": "phone.phoneNumber"
      },
      "mobileprovider": {
        "type": "object",
        "chance": {
          "pickone": [mobileproviders]
        }
      },
      "altphone": {
        "type": "string",
        "faker": "phone.phoneNumber"
      },
      "fax": {
        "type": "string",
        "faker": "phone.phoneNumber"
      },
      "pager": {
        "type": "string",
        "faker": "phone.phoneNumber"
      },
      "email": {
        "type": "string",
        "faker": "internet.email"
      },
      "address": {
        "type": "string",
        "faker": "address.streetAddress"
      },
      "city": {
        "type": "string",
        "faker": "address.city"
      },
      "state": {
        "type": "string",
        "faker": "address.stateAbbr"
      },
      "zip": {
        "type": "string",
        "faker": "address.zipCode"
      },
      "contact": {
        "type": "string",
        "faker": "lorem.words"
      },
      "floor": {
        "type": "object",
        "chance": {
          "pickone": [floors]
        }
      },
      "location": {
        "type": "string",
        "faker": "lorem.words"
      },
      "avatar": {
        "type": "string",
        "faker": "image.imageUrl"
      },
      "accesscard": {
        "type": "integer",
        "minimum": 1000,
        "maximum": 10000
      },
      "login": {
        "type": "number",
        "chance": "hammertime"
      },
      "permissions": {
        "type": "object",
        "properties": {
          "employees": true
        },
        required: ['employees']
      }
    },
    required: ['id', 'username', 'title', 'firstname', 'lastname', 'phone', 'extension', 'mobileprovider', 'floor', 'mobile', 'altphone', 'fax', 'pager', 'email', 'address', 'city', 'state', 'zip', 'contact', 'location', 'avatar', 'accesscard', 'login', 'permissions']
  }
}

export const schema = {
  "type": "object",
  "properties": {
    "auth": {
      "type": "object",
      "properties": {
        "token": {
          "type": "string",
          "faker": "random.uuid"
        },
        "authenticated": true
      },
      required: ['token', 'authenticated']
    },
    "employeeslist": employees,
    "metadata": {
      "type": "object",
      "properties": {
        user,
        floors,
        mobileproviders,
        'days': ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'],
        "columns": {
          "type": "object",
          "properties": {
            "employeescolumns": {
              "type": "array",
              "items": columnsResolved.employeescolumns
            }
          },
          required: ['employeescolumns']
        }
      },
      required: ['mobileproviders', 'floors', 'columns', 'user']
    }
  },
  required: ['employeeslist', 'metadata', 'auth']
};
