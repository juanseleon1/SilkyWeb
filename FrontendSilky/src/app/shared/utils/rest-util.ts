import { throwError } from "rxjs";

export class RestUtil {

    
  public static extractData(res: Response) {
    const body = res;
    return body || {};
}

public static handleError(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
        const err = error || '';
        errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
        errMsg = error.message ? error.message : error.toString();
    }

    return throwError(errMsg);
}

}
