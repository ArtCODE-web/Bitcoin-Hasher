let http = require("http");
let fs = require("fs");
let path = require("path");
let crypto = require("crypto");
let url = require("url");
let os = require("os");

const logo_generate_url = "http://bitcoin_hasher.v1.0.0?hash=";
const PORT = process.env.PORT || 8000, URL_ADDRESS = "localhost";
let server = http.createServer(async (req, res) =>
{
    let content_server = res;
    let read_static;
    if(req.method == "GET")
    {
        res.setHeader("Content-Type", "text/html; charset=utf-8");
        
        read_static = await fs.readFile(path.join(__dirname, "index.html"), (err, content) => 
        {
            if(err) throw err;
            
            let str_content = content.toString();
            for(let i = 0; i < os.cpus().length; i++)
            {
                const mem_kb = os.totalmem() / 1024;
                const mem_mb = mem_kb / 1024;
                const mem_gb = mem_mb / 1024;
                let config_sys = str_content.replace("{{cpu-data}}", os.cpus()[i].model)
                .replace("{{memory-data}}", `${mem_gb}GB`);
                    // / transfer to... : 574619648 byte -> 561152 kilobyte
                    // / transfer to... : 561152 kilobyte -> 548 megabyte
                    // / transfer to... : 548 megabyte -> 0.53 gigabyte 
                content_server.end(config_sys);
            }
        })
        
    }else{
       
       req.on("data", (chunk) => {

            let buffer_parse = chunk.toString();
            let edit_chunk1 = buffer_parse.replace(/hashes=/gi, ""); 
            let edit_chunk2 = edit_chunk1.replace("/?", "").split("%2C");
            
            for(let i = 0; i < edit_chunk2.length; i++)
            {
                
                let new_hash = crypto.createHash('sha256').update(edit_chunk2[i]).digest("hex");
                if(edit_chunk2[i] == null){
                    continue;
                }else{
                    let url_parse = new url.URL(`${logo_generate_url}${edit_chunk2[i]}`);
                    
                    for(let j of url_parse.searchParams)
                    {
                        if(j[0] == "block_number")
                        {
                            let hash_operation = `Exodus: ${edit_chunk2[i].replace(`&block_number=${j[1]}`, "")} | Output: ${new_hash}\n`;
                            fs.appendFile(path.join(__dirname, `db_blocks/block-${j[1]}.txt`), hash_operation, (err) => false); 
                            console.log(hash_operation);
                        }
                    }
                }
            } 
       })
      
        res.end();
    }

}).listen(PORT, URL_ADDRESS, () => console.log(
    `The application is running on the port: ${PORT},
    on page: ${URL_ADDRESS}`
    
))




