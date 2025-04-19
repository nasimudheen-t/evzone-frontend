import axios from "axios"
import SERVER_URL from "./serverURL";


const commonAPI =async (httMethod,url,reqbody,reqheaders)=>{
    // console.log("common api",SERVER_URL+url);
    
    const reqConfig ={
        method:httMethod,
        url,
        data:reqbody,
        headers:reqheaders?reqheaders:{"Content-Type":"application/json"}
    }

    return await axios(reqConfig).then(res=>{
        return res
    }).catch(err=>{
        console.log("catch error",err);
        
        return err
    })
}

export default commonAPI