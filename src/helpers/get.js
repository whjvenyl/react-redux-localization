export default (obj, string) => {
    const splitted = string.split('.');
    let tmpObj = obj;
    splitted.some(e => {
        if(!tmpObj[e]) {
            tmpObj = '';
        }
        if(!tmpObj[e] || typeof tmpObj !== 'object') {
            return true;
        }
        if(tmpObj) {
            tmpObj = tmpObj[e];
        }
    })
    return tmpObj;
}