const errorResponse = require('../utils/errorResponse')
const asyncHandler = require('../middleware/async')
const Bootcamp = require('../models/Bootcamp')

const index = asyncHandler( async (req,res,next) => {

    const bootcamps = await Bootcamp.find()
    res.status(200).json({
        success: true,
        data: bootcamps
    })

})
   
const show = asyncHandler( async (req,res,next) => {

    const bootcamp = await Bootcamp.findById(req.params.id)
    if(!bootcamp){
        return next(new errorResponse('Bootcamp not found',404))
    }
    res.status(200).json({
        success: true,
        data: bootcamp
    })
})

const create = asyncHandler( async (req,res,next) => {

        const bootcamp = await Bootcamp.create(req.body)
        res.status(201).json({
            success: true,
            message: 'Bootcamp created successfully',
            data: bootcamp
        })

})

const update = asyncHandler( async (req,res,next) => {

    const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id,req.body,{
        new: true,
        runValidators: true
    })
    if(!bootcamp){
        return next(new errorResponse('Bootcamp not found',404))
    }
    res.status(200).json({
        success: true,
        message: 'Bootcamp updated successfully',
        data: bootcamp
    })

})

const destroy = asyncHandler( async (req,res,next) => {
 
    const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id)
    if(!bootcamp){
        return next(new errorResponse('Bootcamp not found',404))
    }
    res.status(200).json({
        success: true,
        message: 'Bootcamp deleted successfully',
        data: {}
    })

})

module.exports = { index, show, create, update, destroy}