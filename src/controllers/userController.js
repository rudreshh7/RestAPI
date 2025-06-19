
// Import all required services
import { 
  createUserService, 
  getAllUsersService, 
  getUserByIdService, 
  updateUserService, 
  deleteUserService 
} from "../models/userModel.js";


// Standarized response function

const handleResponse = (res,status,message,data=null)=>{
  res.status(status).json({
    status,
    message,
    data,
  });

};

export const createUser = async(req,res,next) =>{
  const {name,email}=req.body;
  try{
    const newUser = await createUserService(name,email);
    handleResponse(res,201,"User created succesfully", newUser)
  }catch(err){
      next(err);
  }
   
}
export const getAllUsers = async(req,res,next) =>{
  try{
    const users = await getAllUsersService();
    handleResponse(res,200,"User fetched succesfully", users)
  }catch(err){
      next(err);
  } 
   
}

export const getUserById = async(req,res,next) =>{
  try{
    const user = await getUserByIdService(req.params.id);
    if(!user) return handleResponse(res,404,"User not found")
    handleResponse(res,200,"User fetched succesfully", user)
  }catch(err){
      next(err);
  } 
   
}

export const updateUser = async(req,res,next) =>{
  const{name,email} = req.body;
  try{
    const updatedUser = await updateUserService(req.params.id,name,email);
    if(!updatedUser) return handleResponse(res,404,"User not found ");
    handleResponse(res,200,"User updated succesfully",updateUser);
  } catch(err){
    next(err);
  }
}
export const deleteUser = async(req,res,next) =>{
  try{
    const deletedUser = await deleteUserService(req.params.id);
    if(!deletedUser) return handleResponse(res,404,"User not found ");
    handleResponse(res,200,"User fetched succesfully",updateUser);
  } catch(err){ 
    next(err);
  }
}