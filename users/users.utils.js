import jwt from "jsonwebtoken";
import client from "../client";


export const getUser = async(token) =>{
	try {
		if(!token){
			return null;
		}
		const {id} = await jwt.verify(token, process.env.SECRET_KEY) //해독된 token을 리턴
		const user = await client.user.findUnique({where: {id} });
		if(user){
			return user;
		} else {
			return null;
		}
	} catch{
		return null;
	}
};