// Async - Await

const getImagen = async () => {

  try{
    const apiKey = 'Ojq3WAeDDvOesbZlYykYiUPT4kPnOIR5';  
  
    const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
    const {data} = await resp.json();
  
    const {url} = await data.images.original;
    
    const img = document.createElement('img');
    img.src = url;
    document.body.append(img)

  }catch(error){ 
    // Manejo del ERROR!
    console.error("Acá el error:", error);
  }

};

getImagen();

