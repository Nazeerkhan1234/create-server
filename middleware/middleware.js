let nwfn1=(req,res,next)=>{
   
        req.query.name = "hamdan ahmad";
        next();
}
module.exports={nwfn1}