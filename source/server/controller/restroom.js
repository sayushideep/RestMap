const restroomSchema= require('../Model/restroom');

exports.getAllRestrooms= async(req,res)=>{
    try{
        const data= await restroomSchema.find();
        res.status(200).send(data);
    }catch(err){
        res.status(500).send(err);
    }
}

exports.getRestroomWithinRange= async(req,res)=>{
    try{
        
        const minimum_latitude= req.body.location.latitude - req.body.distance;
        const maximum_latitude= req.body.location.latitude + req.body.distance;
        const minimum_longitude= req.body.location.longitude - req.body.distance;
        const maximum_longitude= req.body.location.longitude + req.body.distance;
        const data= await restroomSchema.find(
            {$and:[
                {"location.latitude":{$gte:minimum_latitude,$lte:maximum_latitude}},
            {"location.longitude":{$gte:minimum_longitude,$lte:maximum_longitude}}
            ]
        }
        );
        console.log(req.body)
        console.log(data);
        res.status(200).send(data);
    }catch(err){
        res.status(500).send(err);
    }
}

exports.getRestroomById= async(req,res)=>{
    try{
        const data= await restroomSchema.findById(req.params.id);
        if(data)
            res.status(200).send(data);
        else
        res.status(404).send("NOT FOUND");
    }
    catch(err){
        res.status(500).send(err);
    }
}

exports.rateRestroom= async(req,res)=>{
    try{
        const rr=await restroomSchema.findById(req.params.id);
        if(rr==null){
            res.status(404).send("Restroom not found");
        }
        else{
            const data= await rr.updateOne({$push:{comments:req.body}});
            res.status(200).send(data);
        }
    }catch(err){
        res.status(500).send(err);
    }
}

exports.createNewRestroom= async(req,res)=>{
    const newRestroom= new restroomSchema(req.body);
    try{
        const savedRestroom = await newRestroom.save();
        res.status(200).send(savedRestroom);
    }catch(err){
        res.status(500).send(err);
    }
}