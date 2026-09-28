import {createMcpHandler} from "mcp-handler";
const handler=createMcpHandler((server)=>{
 server.tool("channel_status","Get YouTube agent status.",{},async()=>({content:[{type:"text",text:JSON.stringify({platform:"youtube",mode:"autonomous",status:"configured_scaffold"})}]}));
 server.tool("run_cycle","Start one complete autonomous content cycle.",{topic:{type:"string",description:"Optional topic override"}},async({topic})=>({content:[{type:"text",text:JSON.stringify({accepted:true,topic:topic||process.env.CONTENT_TOPIC||"auto"})}]}));
 server.tool("set_topic","Set the recurring channel niche.",{topic:{type:"string"}},async({topic})=>({content:[{type:"text",text:`Topic set request: ${topic}`}]}));
 server.tool("analytics","Request the latest YouTube channel analytics.",{},async()=>({content:[{type:"text",text:"Connect YouTube OAuth and Analytics API to enable live analytics."}]}));
 server.tool("publish_now","Publish the next ready video to YouTube.",{},async()=>({content:[{type:"text",text:"Connect YouTube OAuth plus the video renderer/storage provider to enable publishing."}]}));
},{capabilities:{}}); export {handler as GET,handler as POST};