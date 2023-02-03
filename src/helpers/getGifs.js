 
 //codigo js 
 export const getGifs = async(category) =>{
    const url = `https://api.giphy.com/v1/gifs/search?api_key=25TDCqI94z7opYRfgGTb6V9w8iqjNL0h&q=${ category }&limit=10`;
//peticion https
const resp = await fetch(url);
const {data} = await resp.json();
    const gifs= data.map(img =>({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url

    }
    
    ));
    
    return gifs;

}
