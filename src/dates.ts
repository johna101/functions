import moment from "moment";

export function CheckDateRange(range?: Date[]) {
    let start = null;
    let end = null;
    if (range) {
        if (range.length > 0) {
            start = moment(range[0]).format('YYYY-MM-DD')
        }
        if (range.length > 1) {
            end = moment(range[1]).format('YYYY-MM-DD')
        }
    }
    return [start, end]
}