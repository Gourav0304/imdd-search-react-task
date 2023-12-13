import userData from "utils/mockData/userData.json";
import { UserAPIData } from "utils/types";

export const UserDataApi = (search = ''): Promise<UserAPIData[]> => new Promise((resolve, _) => {
    console.log({search})
    setTimeout(() => {
        let finalData = []
        if(!search) finalData =  userData
        finalData = userData.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
        resolve(finalData)
    }, 500)
})
