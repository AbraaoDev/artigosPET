import moment from 'moment'


export function relativaDateFormatter(date: string) {
    return moment(date).fromNow()
}