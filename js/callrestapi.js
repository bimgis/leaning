const url='http://some/info';
const headers={
    Authorization : 'fmetoken token=3ee1aa678c19f073309dcf47b638bed2f7854b18',
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
