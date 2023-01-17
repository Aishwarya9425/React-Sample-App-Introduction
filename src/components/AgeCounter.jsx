import { useState } from "react";

export function AgeCounter(props) {
  //   let age = 28;
  //  variables are not reactive, so we need to use states instead

  const [age, setAge] = useState(28);

  // setAge(age); --> dont use setState directly inside the component body else it will result in infinite rendering loop

  function increaseAge() {
    setAge(age + 1); //is asynchronous..will take some time to see the updated value
  }

  console.log("Updated value", age);
  return (
    <div style={{ height: 100, width: 500 }}>
      <button onClick={increaseAge}>Click here to increase the age</button>
      <p>You are {age} years old!!</p>
    </div>
  );
}
