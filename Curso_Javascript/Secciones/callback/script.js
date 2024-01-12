/**Los callbacks, son funciones que reciben como para otra función
 * 
 * Un ejemplo de esto sería
 * const obtener=(user,callback)=>{
 * console.log(user);
 * }
 * setTimeout(()=>{
 * let posts=['a','d'];
 * callback(posts);
 * },2000);
 * obtener('carlos',(posts=>{
 * console.log(posts);
 * }))
 * 
 */