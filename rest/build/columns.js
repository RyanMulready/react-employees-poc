const wocolumns = [
    {
        "label": "Request #",
        "field": "id",
        "filter": true,
        "sort": true,
        "width": "80px"
    },
    {
        "label": "Requested By",
        "field": "requestor.name",
        "filter": true,
        "sort": true,
        "width": "100px"
    },
    {
        "label": "Requested On",
        "field": "status.new",
        "filter": true,
        "sort": true,
        "width": "50px"
    },
    {
        "label": "Issue Type",
        "field": "issuetype.value",
        "filter": true,
        "sort": true,
        "width": "100px"
    },
    {
        "label": "Details",
        "field": "details",
        "filter": true,
        "sort": true,
        "width": "100px"
    },
    {
        "label": "Date Closed",
        "field": "status.closed",
        "filter": true,
        "sort": true,
        "width": "50px"
    },
    {
        "label": "Location",
        "field": "location",
        "filter": true,
        "sort": true,
        "width": "100px"
    },
    {
        "label": "Floor",
        "field": "floor.value",
        "filter": true,
        "sort": true,
        "width": "100px"
    }
]
const historycolumns = [
    {
        "label": "Details",
        "field": "details",
        "width": "80px"
    }, {
        "label": "Date",
        "field": "date",
        "sort": true,
        "width": "80px"
    }, {
        "label": "By",
        "field": "by",
        "sort": true,
        "width": "80px"
    }, {
        "label": "Status",
        "field": "status",
        "sort": true,
        "width": "80px"
    }
]
const filecolumns = [
    {
        "label": "File",
        "field": "file",
        "sort": true,
        "width": "80px"
    }, {
        "label": "Title",
        "field": "title",
        "sort": true,
        "width": "80px"
    }, {
        "label": "Date",
        "field": "date",
        "sort": true,
        "width": "80px"
    }
]
const visitorcolumns = [
    {
        "label": "Visitor",
        "field": "id",
        "sort": true,
        "filter": true,
        "width": "80px"
    }, {
        "label": "Phone",
        "field": "contact.phone",
        "sort": true,
        "filter": true,
        "width": "80px"
    }, {
        "label": "Email",
        "field": "contact.email",
        "sort": true,
        "filter": true,
        "width": "80px"
    }, {
        "label": "Contact",
        "field": "contact",
        "sort": true,
        "filter": true,
        "width": "80px"
    }, {
        "label": "Expected In",
        "field": "time.from",
        "sort": true,
        "filter": true,
        "width": "80px"
    }, {
        "label": "Expected Out",
        "field": "time.to",
        "sort": true,
        "filter": true,
        "width": "80px"
    }, {
        "label": "Time In",
        "field": "time.in",
        "sort": true,
        "filter": true,
        "width": "80px"
    }, {
        "label": "Time Out",
        "field": "time.out",
        "sort": true,
        "filter": true,
        "width": "80px"
    }, {
        "label": "Checked In",
        "field": "checked.in",
        "classes": "text-center",
        "sort": true,
        "filter": true,
        "width": "80px"
    }, {
        "label": "Checked Out",
        "classes": "text-center",
        "field": "checked.out",
        "sort": true,
        "filter": true,
        "width": "80px"
    }
]
const employeescolumns = [
    {
        "label": "Name",
        "title": "Name",
        "dataIndex": "name",
        "field": "name",
        "sort": true,
        "filter": true,
        "width": "80px"
    }, {
        "label": "Email",
        "field": "email",
        "title": "Email",
        "dataIndex": "email",
        "sort": true,
        "filter": true,
        "width": "80px"
    }, {
        "label": "Phone",
        "field": "phone",
        "title": "Phone",
        "dataIndex": "phone",
        "sort": true,
        "filter": true,
        "width": "80px"
    }, {
        "label": "Last Login",
        "field": "login",
        "title": "Last Login",
        "dataIndex": "login",
        "sort": true,
        "filter": true,
        "width": "80px"
    }, {
        "label": "Access Card",
        "field": "accesscard",
        "title": "Access Card",
        "dataIndex": "accesscard",
        "sort": true,
        "filter": true,
        "width": "80px"
    }
]

export const columns = {
  employeescolumns
};
