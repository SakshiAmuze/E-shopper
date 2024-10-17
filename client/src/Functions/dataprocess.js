import url from "../env"
async function dataprocess(path,extra){
 var response = await fetch(url.nodeapipath+path,extra);
 var result = await response.json();
 return result;
}
export default dataprocess;