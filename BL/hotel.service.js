import { HotelsModel } from "@/DL/hotel.model";

export const getAllHotels = () => HotelsModel.find()
export const getHotelById = (id) => HotelsModel.findOne({ id })
export const getHotelsBySearch = (searchString) => HotelsModel.find({
    $or: [
        { title: { $regex: searchString, $options: 'i' } },
        { description: { $regex: searchString, $options: 'i' } },
        { 'location.city': { $regex: searchString, $options: 'i' } },
        { 'location.country': { $regex: searchString, $options: 'i' } }
    ]
})