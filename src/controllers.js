function trackRate() {
    let session = localStorage.getItem("session");
    let count=parseInt(session.split(",")[0], 10) || 0;
    let timestamp=parseInt(session.split(",")[1], 10) || 0;

    const ratelimit=3;
    let currTime=Date.now();
    let diff=currTime-timestamp;      // time taken in this session
    if(count>=ratelimit && diff<60000){
        return false;                   // rate exceeded
    }
    if(diff>=60000){
        // reset session count
        const resetSession="1,"+Date.now().toString();
        localStorage.setItem("session",resetSession);
        return true;
    }
    count=count+1;
    const resetSession=count+","+timestamp;
    localStorage.setItem("session",resetSession);
    return true;
}

export default trackRate;