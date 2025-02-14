const BASE_URL = "http://localhost:9099";

export const BFF_URLS = {
    uploadService: BASE_URL + "/uploadService",
    contestService: BASE_URL + "/contestService",
    challengeService: BASE_URL + "/challengeService",
    userService: BASE_URL + "/userService",
    submissionService: BASE_URL + "/submissionService",
}

const STS_BASE = "http://localhost:9093/sts";

export const STS_URLS = {
    accessToken :  STS_BASE + "/accessToken",
    refreshToken : STS_BASE + "/refreshToken"
}

