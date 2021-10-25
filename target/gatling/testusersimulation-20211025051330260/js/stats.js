var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "40",
        "ok": "40",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "134",
        "ok": "134",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1248",
        "ok": "1248",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "470",
        "ok": "470",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "256",
        "ok": "256",
        "ko": "-"
    },
    "percentiles1": {
        "total": "467",
        "ok": "467",
        "ko": "-"
    },
    "percentiles2": {
        "total": "563",
        "ok": "563",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1005",
        "ok": "1005",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1174",
        "ok": "1174",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 36,
        "percentage": 90
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 3,
        "percentage": 8
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 1,
        "percentage": 3
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "3.636",
        "ok": "3.636",
        "ko": "-"
    }
},
contents: {
"req_get--api-users--09738": {
        type: "REQUEST",
        name: "GET /api/users/2",
path: "GET /api/users/2",
pathFormatted: "req_get--api-users--09738",
stats: {
    "name": "GET /api/users/2",
    "numberOfRequests": {
        "total": "20",
        "ok": "20",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "134",
        "ok": "134",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1248",
        "ok": "1248",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "403",
        "ok": "403",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "331",
        "ok": "331",
        "ko": "-"
    },
    "percentiles1": {
        "total": "198",
        "ok": "198",
        "ko": "-"
    },
    "percentiles2": {
        "total": "524",
        "ok": "524",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1067",
        "ok": "1067",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1212",
        "ok": "1212",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 17,
        "percentage": 85
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 2,
        "percentage": 10
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 1,
        "percentage": 5
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "1.818",
        "ok": "1.818",
        "ko": "-"
    }
}
    },"req_post--api-api-u-45756": {
        type: "REQUEST",
        name: "POST /api/api/users",
path: "POST /api/api/users",
pathFormatted: "req_post--api-api-u-45756",
stats: {
    "name": "POST /api/api/users",
    "numberOfRequests": {
        "total": "20",
        "ok": "20",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "424",
        "ok": "424",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "838",
        "ok": "838",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "537",
        "ok": "537",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "109",
        "ok": "109",
        "ko": "-"
    },
    "percentiles1": {
        "total": "484",
        "ok": "484",
        "ko": "-"
    },
    "percentiles2": {
        "total": "592",
        "ok": "592",
        "ko": "-"
    },
    "percentiles3": {
        "total": "728",
        "ok": "728",
        "ko": "-"
    },
    "percentiles4": {
        "total": "816",
        "ok": "816",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 19,
        "percentage": 95
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 1,
        "percentage": 5
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "1.818",
        "ok": "1.818",
        "ko": "-"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
