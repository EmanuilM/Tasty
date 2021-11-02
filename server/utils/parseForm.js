function parseForm(req,form) { 
    return new Promise((resolve , reject) => { 
        form.parse(req , (error , fields , files) => { 
            if(error) { 
                return reject(error);
            }
          return resolve([fields , files]);
        })
    })
}


module.exports = { 
    parseForm
}