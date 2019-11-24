import axios from 'axios';
import CryptoJS from 'crypto-js';
const axiosInstance = axios.create({
    baseURL: 'localhost:8080'
  })
  let tokenInfo ={} 

axiosInstance.interceptors.request.use(config => {
    // perform a task before the request is sent
    
    let url = new URL(config.url);
    let pathName = url.pathname;
    if(pathName != '/auth'){
        let headers =  {
                    'X-Auth-Token': tokenInfo.authToken,
                    'x-csrf-token': tokenInfo.csrfToken,
                    'Content-Type': 'application/json'
                 }
         config.headers = headers;
    }

    function generateChecksum(str){
					
        let checksum =0;
        let i;
        let x;
        let hexValue;
        let carry;
        for(i=0;i<str.length-2;i=i+2){
            
            x = str.charCodeAt(i);
            hexValue= Number(x).toString(16);
            x = str.charCodeAt(i+1);
            hexValue= hexValue + Number(x).toString(16);
            x = parseInt(hexValue, 16)
            checksum +=x;
        }
         if (str.length % 2 == 0){
            
            // If number of characters is even, then repeat above loop's steps
            // one more time.
            x = str.charCodeAt(i);
            hexValue = Number(x).toString(16);
            x = str.charCodeAt(i+1);
            hexValue = hexValue + Number(x).toString(16);
            x = parseInt(hexValue, 16);
        }
        else {
            // If number of characters is odd, last 2 digits will be 00.
            x = str.charCodeAt(i);
            hexValue = "00" + Number(x).toString(16);
            x = parseInt(hexValue, 16);
        }
        
         checksum += x;
         hexValue = Number(checksum).toString(16);
        if (hexValue.length > 4)
        {
            // If a carry is generated, then we wrap the carry
            carry = parseInt(('' + hexValue[0]), 16);
            // Get the value of the carry bit
            hexValue = hexValue.substring(1, 5);
            // Remove it from the string
            checksum = parseInt(hexValue, 16);
            // Convert it into an int
            checksum += carry;
            // Add it to the checksum
        }
        checksum = parseInt("FFFF", 16) - checksum;
        return checksum;//(checksum.toString(16));
    }

    if(typeof config.data != 'undefined'){
        
        let url= config.url.replace("http://localhost:8081", "");
        if(url.charAt(0) != '/'){
            url = "/"+url;
        }
        //url = /a/b/c?ts=m&orgId=NPCI&loginUser=A
        let urlArray = url.split("?");
        let pathParam;
        if(urlArray.length==1){
            url = urlArray[0]; // /a/b/c
            pathParam = null;
        }else{
           
            pathParam = null;
            url = urlArray[0];// /a/b/c
            pathParam = urlArray[1];  // ts=m&orgId=NPCI&loginUser=A
        }
        
        var checkSumOfPathParam = 0;
        
        if(pathParam != null){
            var splittedPathParam = pathParam.split("&");
            splittedPathParam.forEach(function(entry) {
                if(!entry.includes("ts"))
                    checkSumOfPathParam =  checkSumOfPathParam + parseInt(generateChecksum(entry));
            });
        }
        
        
        if(typeof config.params != 'undefined'){
            let checkSumOfOptionalPathParam = 0;
            let myObj = config.params;
            for (let key in myObj) {
                  if(typeof myObj[key] == 'undefined' || myObj[key] == null ){
                         continue;
                  }
                  if(typeof myObj[key] != 'undefined' && myObj[key] != null ){
                      checkSumOfOptionalPathParam =  checkSumOfOptionalPathParam + parseInt(generateChecksum(key+'='+myObj[key]));  
                      //url += '?'+key+'='+myObj[key];
                  }
                 
            }
            //if(checkSumOfPathParam==0)
            checkSumOfPathParam = checkSumOfPathParam+ checkSumOfOptionalPathParam;
        }
                            
        var myJSON
        if(typeof config.data === "string"){
            myJSON = config.data;
        } else if("[object FormData]" == config.data.toString()){
            myJSON = "";
        }
        else{
            myJSON = JSON.stringify(config.data);
        }
        let urlPlusPayloadCheckSum = generateChecksum(url+myJSON);
        let finalCheckSum = parseInt(urlPlusPayloadCheckSum) + parseInt(checkSumOfPathParam);
       
        config.headers.checksum=CryptoJS.AES.encrypt(finalCheckSum.toString(), "Secret Passphrase");
    }
    
    return config;
    
  }, error => {
    return Promise.reject(error);
  });


  axiosInstance.interceptors.response.use(response => {
    
    let url = new URL(response.config.url);
    let pathName = url.pathname;
    if(pathName == '/auth'){
        tokenInfo.authToken = response.data.token;
        tokenInfo.csrfToken = response.headers['csrf-token'];
    } 
    return response
  }, error => {
    return Promise.reject(error);
  })
 


  export default axiosInstance;