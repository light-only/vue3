
export function login(username,password,code,uuid){
    return new Promise((resolve,reject)=>{
        if(username && password && code && uuid){
            const data = {
                code:200,
                data:[1,2,3,4],
                token:'12222223djfkajf',
                msg:"请求成功"
            };
            resolve(data);
        }else{
            console.log(33333)
            const data = {
                code:404,
                data:[],
                msg:'请求失败'
            }
            reject({
                data
            });
        }

    })
}