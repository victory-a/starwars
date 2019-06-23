const urls = [
    'https://swapi.co/api/films/',
    'https://swapi.co/api/planets/',
    'https://swapi.co/api/starships/',
    'https://swapi.co/api/people/',
]

export const [ films , planets, starships, people ] = urls;

export async function apiCall(url) {
  try {
      const requests = await fetch(url)      
      const data = await requests.json();
        return data.results;
        
  } catch(err) {
    console.log(err)
  }
}



  


