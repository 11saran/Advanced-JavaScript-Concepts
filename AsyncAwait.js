function fetchData(){
    return new Promise((resolve)=>{                                      //Asynchronous code
        setTimeout(()=>{resolve("Data Successfully fetched!")},2000)        
    })
}

function processData(){
    fetchData()
    .then((data)=>{
        console.log(data)              //Handling Here
    })
    .catch(error=>{console.log(error)})
}

processData()


//-----------async and await-----------------

function fetchData() {
  return new Promise((resolve) => {

    setTimeout(() => {
      resolve("Data Successfully fetched!");
    }, 2000);
  });
}

async function processData() {
  //We can not use await for normal function, only use for asynchronous function so that change the function as asynchronous function for that used async key word
  try {
    const data = await fetchData(); //the await is used to do the waiting until  the data get.
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

processData();