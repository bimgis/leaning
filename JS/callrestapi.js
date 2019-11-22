const url='http://some/info';
const headers={   
    Accept : 'application/json'
}

const userAction = async (url) => {
    const response = await fetch(url,
    {
        headers : headers,
        method : 'GET'
    });
    const myJson = await response.json(); //extract JSON from the http response
    console.log(myJson);
  }
 userAction(url);
