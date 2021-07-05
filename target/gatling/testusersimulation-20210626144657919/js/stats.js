var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "20000",
        "ok": "20000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "140",
        "ok": "140",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "21304",
        "ok": "21304",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "436",
        "ok": "436",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "284",
        "ok": "284",
        "ko": "-"
    },
    "percentiles1": {
        "total": "482",
        "ok": "482",
        "ko": "-"
    },
    "percentiles2": {
        "total": "553",
        "ok": "553",
        "ko": "-"
    },
    "percentiles3": {
        "total": "728",
        "ok": "728",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1508",
        "ok": "1508",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 19310,
        "percentage": 97
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 316,
        "percentage": 2
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 374,
        "percentage": 2
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "26.212",
        "ok": "26.212",
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
        "total": "10000",
        "ok": "10000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "140",
        "ok": "140",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "21304",
        "ok": "21304",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "277",
        "ok": "277",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "274",
        "ok": "274",
        "ko": "-"
    },
    "percentiles1": {
        "total": "229",
        "ok": "229",
        "ko": "-"
    },
    "percentiles2": {
        "total": "285",
        "ok": "285",
        "ko": "-"
    },
    "percentiles3": {
        "total": "478",
        "ok": "478",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1248",
        "ok": "1248",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 9792,
        "percentage": 98
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 44,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 164,
        "percentage": 2
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "13.106",
        "ok": "13.106",
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
        "total": "10000",
        "ok": "10000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "424",
        "ok": "424",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "3762",
        "ok": "3762",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "594",
        "ok": "594",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "190",
        "ok": "190",
        "ko": "-"
    },
    "percentiles1": {
        "total": "549",
        "ok": "549",
        "ko": "-"
    },
    "percentiles2": {
        "total": "603",
        "ok": "603",
        "ko": "-"
    },
    "percentiles3": {
        "total": "790",
        "ok": "790",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1571",
        "ok": "1571",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 9518,
        "percentage": 95
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 272,
        "percentage": 3
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 210,
        "percentage": 2
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "13.106",
        "ok": "13.106",
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
