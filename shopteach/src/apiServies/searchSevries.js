import request from "../utils/request";
const searchServies = async (q,type='less') => {
    try {
      const res =  await request.get(`users/search`, {
        params: {
          q,
          type
        },
      });
     return res.data.data
    } catch (error) {
      console.log(error);
    }
  };
export {searchServies}