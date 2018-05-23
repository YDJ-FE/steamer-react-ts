import { stringify } from "qs";
import http from "util/http";
import { message } from "antd";

import { DEFAULT_HTTP_OPTION } from "./contants";

export async function demoRequest(id: string) {
    return http.get('yourPath', {
        id
    }, DEFAULT_HTTP_OPTION)
}
