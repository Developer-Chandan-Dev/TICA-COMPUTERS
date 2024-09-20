const deleteFromDatabase = async(id, model,idname ) => {

    const element = await model.findById({_id: id});

    // Delete image from cloudinary
    if(element.idname){
        await deleteFromCloudinary(element.idname);
    }

    await model.findByIdAndDelete({_id: id});
    // res.status(200).json({})
};

module.exports = { deleteFromDatabase };
