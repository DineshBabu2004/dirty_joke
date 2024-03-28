let url = "https://v2.jokeapi.dev/joke/Dark?type=twopart";
let p1 = document.querySelector("#ques");
let p2 = document.querySelector("#ans");
let b = document.querySelector("button");

b.addEventListener("click",call);


async function call(){
    let res = await fetchJoke();
    console.log(res.data.delivery);
    console.log(res.data.setup);
    p2.innerText=res.data.delivery;
    p1.innerText=res.data.setup;


}


async function fetchJoke() {
    try{
        let data = await axios.get(url);
        return data;
    }
    catch(e){
        return e;
    }
  
}
