import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState } from "react";
// import {useSearchParams} from "react-router-dom";


function App() {
  // let [data1,setData1] = useSearchParams()
  let [data, setData] = useState({});
  useEffect((event) => {
    setData({
      name: "CHENG",
      given_name: "MUQING ",
      passport: "E56277989",
      length_of_stay: "One month (single entry)",
      country: "China",
      vissa_issued: "29 Jun 2022",
      date_of_birth: "19 May 1993",
      expire_date: "29 Sep 2022",
      gender: "Male",
      vissa_type: "T",
    });
    let arr = window.location.search.slice(1).split("&")
    let newArr = []
    let obj = {}
    for(let i = 0 ; i< arr.length ; i++){
      let key = arr[i].split('=')
      // console.log(key[0])
      obj[key[0]] = key[1]
    }
    setData(obj)

  },[]);
  // function handleSubmit(event) {
  //   event.preventDefault();
  //   // The serialize function here would be responsible for
  //   // creating an object of { key: value } pairs from the
  //   // fields in the form that make up the query.
  //   let params = serializeFormQuery(event.target);
  //   setSearchParams(params);
  // }
  return (
    <div className="form-box">
      <form>
        <label for="fname">Surname</label>
        <input type="text" id="fname" name="firstname" value={data.name}>
          {data.surname}
        </input>
        <label for="fname">Given Name</label>
        <input type="text" id="fname" name="firstname" value={data.given_name}></input>
        <label for="fname">Passport No</label>
        <input type="text" id="fname" name="firstname" value={data.passport}></input>
        <label for="fname">Length of Stay</label>
        <input type="text" id="fname" name="firstname" value={data.length_of_stay}></input>
        <label for="fname">Country of Nationality</label>
        <input type="text" id="fname" name="firstname" value={data.country}></input>
        <label for="fname">Vissa Issued</label>
        <input type="text" id="fname" name="firstname" value={data.vissa_issued}></input>
        <label for="fname">Date of Birth</label>
        <input type="text" id="fname" name="firstname" value={data.date_of_birth}></input>
        <label for="fname">Expire Date</label>
        <input type="text" id="fname" name="firstname" value={data.expire_date}></input>
        <label for="fname">Gender</label>
        <input type="text" id="fname" name="firstname" value={data.gender}></input>
        <label for="fname">Vissa Type</label>
        <input type="text" id="fname" name="firstname" value={data.vissa_type}></input>
      </form>
    </div>
  );
}

export default App;
