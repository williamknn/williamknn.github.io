define({ "api": [
  {
    "type": "post",
    "url": "/geoinfo/geocode",
    "title": "Retrieve geocodification",
    "version": "0.1.0",
    "name": "PostGeocode",
    "group": "Geocode",
    "description": "<p>You'll need to post an array of address objects to retrieve the geocode data.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>The address code that comes from your own system.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The name of the address spot.</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "address",
            "description": "<p>An object of address information.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "address.route",
            "description": "<p>Street/Avenue of the address, without number and neighborhood.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "address.street_number",
            "description": "<p>Spot number.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "address.city",
            "description": "<p>Address city.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "address.state",
            "description": "<p>Address state.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "address.country",
            "description": "<p>Address country.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "weight",
            "description": "<p>Here you enter, if exists, the weight (kg) of the delivery.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "volume",
            "description": "<p>Here you enter, if exists, the volume (m³) of the delivery.</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "constraints",
            "description": "<p>The constraints of your delivery request.</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "constraints.window_daily",
            "description": "<p>Daily window of your delivery request.</p>"
          },
          {
            "group": "Parameter",
            "type": "Datetime",
            "optional": true,
            "field": "constraints.window_daily.start_time",
            "description": "<p>Start time of your delivery daily window.</p>"
          },
          {
            "group": "Parameter",
            "type": "Datetime",
            "optional": true,
            "field": "constraints.window_daily.end_time",
            "description": "<p>End time of your delivery daily window.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example: ",
          "content": "[{\n     \"code\": \"13400\",\n     \"name\": \"SUPER MERCADO LORDS S/A\",\n     \"address\": {\n         \"route\": \"AVENIDA TIRADENTES\",\n         \"street_number\": 1000,\n         \"city\": \"SÃO PAULO\",\n         \"state\": \"SP\",\n         \"country\": \"Brasil\"\n     },\n     \"weight\": 860,\n     \"volume\": 45,\n     \"constraints\": {\n         \"window_daily\": {\n             \"start_time\": \"1970-01-01T05:00:00.000Z\",\n             \"end_time\": \"1970-01-01T12:00:00.000Z\"\n         }\n     }\n }, {\n     \"code\": \"08891\",\n     \"name\": \"GABI SANDÁLIAS LTDA-ME\",\n     \"address\": {\n         \"route\": \"AVENIDA DAS ALAMEDAS\",\n         \"street_number\": 2,\n         \"city\": \"JUNDIAÍ\",\n         \"state\": \"SP\",\n         \"country\": \"Brasil\"\n     },\n     \"weight\": 65,\n     \"volume\": 3\n }]",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Geocode[]",
            "optional": false,
            "field": "geoinfo/geocode/",
            "description": "<p>Geocode information</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotAuthenticated",
            "description": "<p>Request was not authenticated.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n    \"type\": \"notauthenticated\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/geoinfo.server.routes.js",
    "groupTitle": "Geocode"
  },
  {
    "type": "get",
    "url": "/jobs/:jobId",
    "title": "Request Job",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "jobId",
            "description": "<p>Job unique ID.</p>"
          }
        ]
      }
    },
    "version": "0.1.0",
    "name": "GetJob",
    "group": "Jobs",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "job",
            "description": "<p>Unique job.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n {\n     \"_id\" : ObjectId(\"57daed700963df0e203e6b90\"),\n     \"created\" : ISODate(\"2016-09-15T18:50:24.340Z\"),\n     \"creator\" : ObjectId(\"57e2c22901ed2c6f0d2aea06\"),\n     \"due_date\" : ISODate(\"2016-09-20T20:00:00.000Z\"),\n     \"operator\" : ObjectId(\"5789aaf9afb20c106125ddba\"),\n     \"routing\" : ObjectId(\"57bf069bb174820251079afe\"),\n     \"version\" : ObjectId(\"57d4312e49d38dd20fdbb820\"),\n     \"status\" : \"assigned\",\n     \"distance\" : 33.9,\n     \"route\" : \"0\",\n     \"tasks\" : [\n         {\n             \"type\" : \"delivery\",\n             \"direction\" : 0,\n             \"status\" : \"created\",\n             \"additional_info\" : \"\",\n             \"log\" : [ ],\n             \"files\" : [ ]\n         },\n         {\n             \"type\" : \"delivery\",\n             \"direction\" : 1,\n             \"status\" : \"created\",\n             \"additional_info\" : \"\",\n             \"log\" : [ ],\n             \"files\" : [ ]\n         },\n         {\n             \"type\" : \"delivery\",\n             \"direction\" : 2,\n             \"status\" : \"created\",\n             \"additional_info\" : \"\",\n             \"log\" : [ ],\n             \"files\" : [ ]\n         },\n         {\n             \"type\" : \"delivery\",\n             \"direction\" : 3,\n             \"status\" : \"created\",\n             \"additional_info\" : \"\",\n             \"log\" : [ ],\n             \"files\" : [ ]\n         },\n         {\n             \"type\" : \"delivery\",\n             \"direction\" : 4,\n             \"status\" : \"created\",\n             \"additional_info\" : \"\",\n             \"log\" : [ ],\n             \"files\" : [ ]\n         },\n         {\n             \"type\" : \"delivery\",\n             \"direction\" : 5,\n             \"status\" : \"created\",\n             \"additional_info\" : \"\",\n             \"log\" : [ ],\n             \"files\" : [ ]\n         },\n         {\n             \"type\" : \"delivery\",\n             \"direction\" : 6,\n             \"status\" : \"created\",\n             \"additional_info\" : \"\",\n             \"log\" : [ ],\n             \"files\" : [ ]\n         },\n         {\n             \"type\" : \"delivery\",\n             \"direction\" : 7,\n             \"status\" : \"created\",\n             \"additional_info\" : \"\",\n             \"log\" : [ ],\n             \"files\" : [ ]\n         },\n         {\n             \"type\" : \"delivery\",\n             \"direction\" : 8,\n             \"status\" : \"created\",\n             \"additional_info\" : \"\",\n             \"log\" : [ ],\n             \"files\" : [ ]\n         },\n         {\n             \"type\" : \"delivery\",\n             \"direction\" : 9,\n             \"status\" : \"created\",\n             \"additional_info\" : \"\",\n             \"log\" : [ ],\n             \"files\" : [ ]\n         },\n         {\n             \"type\" : \"delivery\",\n             \"direction\" : 10,\n             \"status\" : \"created\",\n             \"additional_info\" : \"\",\n             \"log\" : [ ],\n             \"files\" : [ ]\n         },\n         {\n             \"type\" : \"delivery\",\n             \"direction\" : 11,\n             \"status\" : \"created\",\n             \"additional_info\" : \"\",\n             \"log\" : [ ],\n             \"files\" : [ ]\n         },\n         {\n             \"type\" : \"delivery\",\n             \"direction\" : 12,\n             \"status\" : \"created\",\n             \"additional_info\" : \"\",\n             \"log\" : [ ],\n             \"files\" : [ ]\n         }\n     ],\n     \"log\" : [ ],\n     \"__v\" : 0\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotAuthenticated",
            "description": "<p>Request was not authenticated.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotAuthorized",
            "description": "<p>User is not authorized.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n    \"type\": \"notauthenticated\"\n}\nHTTP/1.1 403 Forbidden\n{\n    \"type\": \"notauthorized\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/job.server.routes.js",
    "groupTitle": "Jobs"
  },
  {
    "type": "get",
    "url": "/jobs",
    "title": "Request Jobs list",
    "version": "0.1.0",
    "name": "GetJobs",
    "group": "Jobs",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Jobs[]",
            "optional": false,
            "field": "jobs",
            "description": "<p>List of jobs.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotAuthenticated",
            "description": "<p>Request was not authenticated.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotAuthorized",
            "description": "<p>User is not authorized.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n    \"type\": \"notauthenticated\"\n}\nHTTP/1.1 403 Forbidden\n{\n    \"type\": \"notauthorized\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/job.server.routes.js",
    "groupTitle": "Jobs"
  },
  {
    "type": "post",
    "url": "/jobs/:jobId/accept",
    "title": "Accept job",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "jobId",
            "description": "<p>Job unique ID.</p>"
          }
        ]
      }
    },
    "version": "0.1.0",
    "name": "PostAcceptJob",
    "group": "Jobs",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "job",
            "description": "<p>Job updated with operator confirmed.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"job.status\": \"accepted\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotAuthenticated",
            "description": "<p>Request was not authenticated.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotAuthorized",
            "description": "<p>User is not authorized.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n    \"type\": \"notauthenticated\"\n}\nHTTP/1.1 403 Forbidden\n{\n    \"type\": \"notauthorized\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/job.server.routes.js",
    "groupTitle": "Jobs"
  },
  {
    "type": "post",
    "url": "/jobs/:jobId/:taskId/checking",
    "title": "Make checkin",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "jobId",
            "description": "<p>Job unique ID.</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "taskId",
            "description": "<p>Task unique ID.</p>"
          }
        ]
      }
    },
    "version": "0.1.0",
    "name": "PostChecking",
    "group": "Jobs",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "job",
            "description": "<p>Job updated with task checkin.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"task.status\": \"arrived\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotAuthenticated",
            "description": "<p>Request was not authenticated.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotAuthorized",
            "description": "<p>User is not authorized.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n    \"type\": \"notauthenticated\"\n}\nHTTP/1.1 403 Forbidden\n{\n    \"type\": \"notauthorized\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/job.server.routes.js",
    "groupTitle": "Jobs"
  },
  {
    "type": "post",
    "url": "/jobs/:jobId/:taskId/endTask",
    "title": "Finalize a task",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "jobId",
            "description": "<p>Job unique ID.</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "taskId",
            "description": "<p>Task unique ID.</p>"
          }
        ]
      }
    },
    "version": "0.1.0",
    "name": "PostEndTask",
    "group": "Jobs",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "job",
            "description": "<p>Job with task ended.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"task.status\": \"completed\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotAuthenticated",
            "description": "<p>Request was not authenticated.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotAuthorized",
            "description": "<p>User is not authorized.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n    \"type\": \"notauthenticated\"\n}\nHTTP/1.1 403 Forbidden\n{\n    \"type\": \"notauthorized\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/job.server.routes.js",
    "groupTitle": "Jobs"
  },
  {
    "type": "post",
    "url": "/jobs/:jobId/geolocation",
    "title": "Update Geolocation",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "jobId",
            "description": "<p>Job unique ID.</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "lat",
            "description": "<p>Latitude information.</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "lng",
            "description": "<p>Longitude information.</p>"
          }
        ]
      }
    },
    "version": "0.1.0",
    "name": "PostGeolocation",
    "group": "Jobs",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "job",
            "description": "<p>Object updated with geolocation.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n \"log\": [\n         {\n             \"type\": \"geolocation_update\",\n             \"date\": \"2016-09-19T20:56:41.147Z\",\n             \"info\": {\n                 \"lat\": -23.6178025,\n                 \"lng\": -46.6404652\n             },\n             \"_id\": \"57e051096cab298630b90d22\"\n         }\n     ]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotAuthenticated",
            "description": "<p>Request was not authenticated.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotAuthorized",
            "description": "<p>User is not authorized.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n    \"type\": \"notauthenticated\"\n}\nHTTP/1.1 403 Forbidden\n{\n    \"type\": \"notauthorized\"\n}\nHTTP/1.1 400 Bad Request\n{\n    \"message\": \"Only \\\"operating\\\" tasks can have their geolocation updated\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/job.server.routes.js",
    "groupTitle": "Jobs"
  },
  {
    "type": "post",
    "url": "/jobs/:jobId/operator",
    "title": "Set new operator",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "jobId",
            "description": "<p>Job unique ID.</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "operatorId",
            "description": "<p>Operator unique ID.</p>"
          }
        ]
      }
    },
    "version": "0.1.0",
    "name": "PostOperator",
    "group": "Jobs",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "job",
            "description": "<p>Unique job.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotAuthenticated",
            "description": "<p>Request was not authenticated.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotAuthorized",
            "description": "<p>User is not authorized.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n    \"type\": \"notauthenticated\"\n}\nHTTP/1.1 403 Forbidden\n{\n    \"type\": \"notauthorized\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/job.server.routes.js",
    "groupTitle": "Jobs"
  },
  {
    "type": "post",
    "url": "/jobs/:jobId/refuse",
    "title": "Refuse job",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "jobId",
            "description": "<p>Job unique ID.</p>"
          }
        ]
      }
    },
    "version": "0.1.0",
    "name": "PostRefuseJob",
    "group": "Jobs",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "job",
            "description": "<p>Job updated with operator's deny.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"job.status\": \"refused\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotAuthenticated",
            "description": "<p>Request was not authenticated.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotAuthorized",
            "description": "<p>User is not authorized.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n    \"type\": \"notauthenticated\"\n}\nHTTP/1.1 403 Forbidden\n{\n    \"type\": \"notauthorized\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/job.server.routes.js",
    "groupTitle": "Jobs"
  },
  {
    "type": "post",
    "url": "/jobs/:jobId/send",
    "title": "Send job to operator",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "jobId",
            "description": "<p>Job unique ID.</p>"
          }
        ]
      }
    },
    "version": "0.1.0",
    "name": "PostSendToOperator",
    "group": "Jobs",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "job",
            "description": "<p>Job status updated.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"job.status\": \"sent\",\n    \"job.received\": \"ISODate(\"2016-10-03T22:40:50.400Z\")\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotAuthenticated",
            "description": "<p>Request was not authenticated.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotAuthorized",
            "description": "<p>User is not authorized.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n    \"type\": \"notauthenticated\"\n}\nHTTP/1.1 403 Forbidden\n{\n    \"type\": \"notauthorized\"\n}\nHTTP/1.1 400 Bad Request\n{\n    \"message\": \"Only \\\"assigned\\\" jobs can be sent\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/job.server.routes.js",
    "groupTitle": "Jobs"
  },
  {
    "type": "post",
    "url": "/jobs/:jobId/:taskId/service",
    "title": "Status: servicing",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "jobId",
            "description": "<p>Job unique ID.</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "taskId",
            "description": "<p>Task unique ID.</p>"
          }
        ]
      }
    },
    "version": "0.1.0",
    "name": "PostService",
    "group": "Jobs",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "job",
            "description": "<p>Job with updated servicing status.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"task.status\": \"servicing\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotAuthenticated",
            "description": "<p>Request was not authenticated.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotAuthorized",
            "description": "<p>User is not authorized.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n    \"type\": \"notauthenticated\"\n}\nHTTP/1.1 403 Forbidden\n{\n    \"type\": \"notauthorized\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/job.server.routes.js",
    "groupTitle": "Jobs"
  },
  {
    "type": "post",
    "url": "/jobs/:jobId/:taskId/init",
    "title": "Task initialization",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "jobId",
            "description": "<p>Job unique ID.</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "taskId",
            "description": "<p>Task unique ID.</p>"
          }
        ]
      }
    },
    "version": "0.1.0",
    "name": "PostTaskInit",
    "group": "Jobs",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "job",
            "description": "<p>Job task initialized.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"job.status\": \"started\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotAuthenticated",
            "description": "<p>Request was not authenticated.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotAuthorized",
            "description": "<p>User is not authorized.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n    \"type\": \"notauthenticated\"\n}\nHTTP/1.1 403 Forbidden\n{\n    \"type\": \"notauthorized\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/job.server.routes.js",
    "groupTitle": "Jobs"
  },
  {
    "type": "post",
    "url": "/jobs/:jobId/:taskId/registerOccurrence",
    "title": "Register an occurrence",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "jobId",
            "description": "<p>Job unique ID.</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "taskId",
            "description": "<p>Task unique ID.</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "occurrenceType",
            "description": "<p>Occurrence type (Predeterminated string).</p>"
          }
        ]
      }
    },
    "version": "0.1.0",
    "name": "PostTaskOccurrence",
    "group": "Jobs",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "job",
            "description": "<p>Job with a occurrence registered.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"task.status\": \"occurrence\",\n    \"task.occurrence_type\": \"Predeterminated string (sent with request)\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotAuthenticated",
            "description": "<p>Request was not authenticated.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotAuthorized",
            "description": "<p>User is not authorized.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n    \"type\": \"notauthenticated\"\n}\nHTTP/1.1 403 Forbidden\n{\n    \"type\": \"notauthorized\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/job.server.routes.js",
    "groupTitle": "Jobs"
  },
  {
    "type": "post",
    "url": "/auth/signin",
    "title": "API Login",
    "version": "0.1.0",
    "name": "ApiLogin",
    "group": "Login",
    "description": "<p>API authentication. Keep the cookie generated as if it were originated from a browser. Notice: this is a temporary method since we're moving to HTTPS+Apikey authentication.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Username</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "User",
            "optional": false,
            "field": "user",
            "description": "<p>User data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"__v\": 0,\n    \"_id\": \"55ef30cf09f48f486944aff9\",\n    \"displayName\": \"Example User\"\n    \"provider\": \"local\",\n    \"username\": \"example\",\n    \"plan\": \"5633de9f333bf87ef65dd92d\",\n    \"updated\": \"2016-02-01T21:13:54.175Z\",\n    \"routingProfile\": {\n        \"type\": \"custom\",\n        \"opts\": {\n            \"parameters_txt\": \"60 100 5  0.1 0.2 0.3 0.4 0.2  10 100 0 0 0 0 0 0 0 1000  0.3 0.3 0.3 0.3  0.1 0.2 0\"\n        }\n    },\n    \"created\": \"2015-09-08T19:02:39.773Z\",\n    \"email\": \"user@example.com\",\n    \"lastName\": \"Sample\",\n    \"firstName\": \"Example\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": ".",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Invalid Request\n{\n    \"type\": \"invalidlogin\",\n    \"msg\": \"...\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/users.server.routes.js",
    "groupTitle": "Login"
  },
  {
    "type": "post",
    "url": "/orders",
    "title": "Create an order",
    "version": "0.1.0",
    "name": "PostOrder",
    "group": "Order",
    "description": "<p>After geocoding your deliveries you'll need to create an order. Put your deliveries inside an array and make the request.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Order[]",
            "optional": false,
            "field": "order",
            "description": "<p>Create a new order.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the order.</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "deliveries",
            "description": "<p>Array of deliveries objects.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>Delivery code.</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "address",
            "description": "<p>Delivery address obj.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "address.route",
            "description": "<p>Address without number and neighborhood. E.g: Av. Paulista.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "address.street_number",
            "description": "<p>Number of the delivery spot.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "address.city",
            "description": "<p>City of where delivery deserves.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "address.state",
            "description": "<p>State of where delivery deserves. E.g: SP.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "address.country",
            "description": "<p>Country of where delivery deserves. E.g: Brasil.</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "address.geocode",
            "description": "<p>Geocode object retrieved from the geocoding request.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "address.geocode.lat",
            "description": "<p>Delivery latitude.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "address.geocode.lng",
            "description": "<p>Delivery longitude.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "address.weight",
            "description": "<p>Delivery weight in kg.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "address.volume",
            "description": "<p>Delivery volume in m³.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example",
          "content": "\t{\n\t    \"deliveries\": [\n\t        {\n\t            \"code\": \"18056\",\n\t            \"name\": \"HORTI CENTER ALEGRIA LTDA ME\",\n\t            \"address\": {\n\t                \"route\": \"R ENG ARMANDO DE ARRUDA PEREIRA\",\n\t                \"street_number\": 1439,\n\t                \"city\": \"SAO CAETANO DO SUL\",\n\t                \"state\": \"SP\",\n\t                \"country\": \"Brasil\",\n\t                \"geocode\": {\n\t                    \"lat\": -23.6338,\n\t                    \"lng\": -46.579\n\t                }\n\t            },\n\t            \"weight\": 258,\n\t            \"volume\": 0\n\t        },\n\t        {\n\t            \"code\": \"06822\",\n\t            \"name\": \"SUPERMERCADO NOVA ESPERANCA LTDA ME\",\n\t            \"address\": {\n\t                \"route\": \"AL D PEDRO DE ALCANTARA\",\n\t                \"street_number\": 457,\n\t                \"city\": \"SAO BERNARDO DO CAMPO\",\n\t                \"state\": \"SP\",\n\t                \"country\": \"Brasil\",\n\t                \"geocode\": {\n\t                    \"lat\": -23.7051,\n\t                    \"lng\": -46.5386\n\t                }\n\t            },\n\t            \"weight\": 914,\n\t            \"volume\": 0\n\t        }],\n\t    \"name\": \"New order\"\n    }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotAuthenticated",
            "description": "<p>Request was not authenticated.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n    \"type\": \"notauthenticated\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/orders.server.routes.js",
    "groupTitle": "Order"
  },
  {
    "type": "get",
    "url": "/routings",
    "title": "Request Routings list",
    "version": "0.1.0",
    "name": "GetRoutings",
    "group": "Routings",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Routings[]",
            "optional": false,
            "field": "routings",
            "description": "<p>List of routings.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotAuthenticated",
            "description": "<p>Request was not authenticated.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n    \"type\": \"notauthenticated\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/routings.server.routes.js",
    "groupTitle": "Routings"
  },
  {
    "type": "post",
    "url": "/routings",
    "title": "Create new routing",
    "version": "0.1.0",
    "name": "PostRouting",
    "group": "Routings",
    "description": "<p>Make sure do you have at least a vehicle, a depot and the required informations are all filled. Before to make a routing you need to have an order.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "routing",
            "description": "<p>Routing object.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "routing.name",
            "description": "<p>Name of the your routing.</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "routing.data.order",
            "description": "<p>Order object.</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "routing.data.order._id",
            "description": "<p>Order ID from the order created before.</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "routing.data.order.deliveries",
            "description": "<p>All deliveries previously created.</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "routing.data.vehicles",
            "description": "<p>All vehicles previously created.</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "routing.data.depots",
            "description": "<p>All depots previously created.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Routings[]",
            "optional": false,
            "field": "routings",
            "description": "<p>Create a new routing.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotAuthenticated",
            "description": "<p>Request was not authenticated.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n    \"type\": \"notauthenticated\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/routings.server.routes.js",
    "groupTitle": "Routings"
  }
] });
