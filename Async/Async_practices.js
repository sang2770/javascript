//! covert code example err 404
function loadJson(url) {
    return fetch(url)
      .then(response => {
        if (response.status == 200) {
          return response.json();
        } else {
          throw new Error(response.status);
        }
      });
  }
  loadJson('no-such-user.json')
    .catch(result=>console.log(result)); 
//TODO convert result
async function loadJson_1(url){
    let Jsonload= await fetch(url);
    if(Jsonload.status==200)
    {
        return await Jsonload.json();
    }
    else{
        throw new Error(Jsonload.status);
    }
}
loadJson_1("http://ok")
.then(result=>console.log(result))
.catch(err=>console.log(err))
// Or
try {
    console.log(loadJson_1("http://ok"));
} catch (error) {
    console.log(err);
}