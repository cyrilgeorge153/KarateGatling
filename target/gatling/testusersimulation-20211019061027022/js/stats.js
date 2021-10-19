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
        "total": "129",
        "ok": "129",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "755",
        "ok": "755",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "324",
        "ok": "324",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "152",
        "ok": "152",
        "ko": "-"
    },
    "percentiles1": {
        "total": "368",
        "ok": "368",
        "ko": "-"
    },
    "percentiles2": {
        "total": "449",
        "ok": "449",
        "ko": "-"
    },
    "percentiles3": {
        "total": "488",
        "ok": "488",
        "ko": "-"
    },
    "percentiles4": {
        "total": "654",
        "ok": "654",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 40,
        "percentage": 100
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 0,
        "percentage": 0
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
        "total": "129",
        "ok": "129",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "331",
        "ok": "331",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "187",
        "ok": "187",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "56",
        "ok": "56",
        "ko": "-"
    },
    "percentiles1": {
        "total": "173",
        "ok": "173",
        "ko": "-"
    },
    "percentiles2": {
        "total": "195",
        "ok": "195",
        "ko": "-"
    },
    "percentiles3": {
        "total": "331",
        "ok": "331",
        "ko": "-"
    },
    "percentiles4": {
        "total": "331",
        "ok": "331",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 20,
        "percentage": 100
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 0,
        "percentage": 0
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
        "total": "405",
        "ok": "405",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "755",
        "ok": "755",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "462",
        "ok": "462",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "71",
        "ok": "71",
        "ko": "-"
    },
    "percentiles1": {
        "total": "450",
        "ok": "450",
        "ko": "-"
    },
    "percentiles2": {
        "total": "460",
        "ok": "460",
        "ko": "-"
    },
    "percentiles3": {
        "total": "508",
        "ok": "508",
        "ko": "-"
    },
    "percentiles4": {
        "total": "706",
        "ok": "706",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 20,
        "percentage": 100
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 0,
        "percentage": 0
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
