import { promises as fs } from 'fs';
import { join } from 'path';

export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    // console.log("submited body",body)
    const directory = join(process.cwd(), 'public/files');
    const filePath = join(directory, 'event.csv');
    // console.log(JSON.stringify(body.result))
    const keys = Object.keys(body.result)
    keys.map(i => `'${i}'`).join(',');

    console.log('keys',keys)

    function createString(data){
        
        let thestring = ""
        // console.log("thecreatestring",Object.values(Object.values(data)))
        Object.values(data).forEach(element => {
            if(typeof(element)==='object'){
                // console.log("theelemet",Object.values(element))
                thestring= thestring+JSON.stringify(element.label)+','
            }else{
                // console.log(element,"not an object")
                thestring = thestring+element
            }
        });
        
     return thestring+'\n'
    }

    try {
        // Ensure the directory exists
        await fs.mkdir(directory, { recursive: true });
        // console.log(await fs.stat(filePath))
        // Convert data to CSV format (assuming data is an array of values)
        // const csvRow = data.join(',') + '\n';
        try {
            const stats = await fs.stat(filePath)
            // console.log(stats)
        }catch(error){
            // console.log("file dont exist",error)
            const csvRow = keys.toString()+'\n'
            await fs.appendFile(filePath,csvRow, 'utf8');
        }
    
    //    const csvRow =  JSON.stringify(body.result)+"\n"
        
        // Append the CSV row to the file
        await fs.appendFile(filePath, createString(body.result), 'utf8');
        
        return { success: true, message: 'Data appended to CSV file successfully' };
      } catch (error) {
        return { success: false, message: 'Error appending to CSV file', error: error.message };
      }
    
   
})