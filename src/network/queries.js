export function getData(keyword) {
  const url = `${process.env.REACT_APP_API_BASE_URL}?key=${process.env.REACT_APP_API_KEY}&cx=${process.env.REACT_APP_API_CX}&q=${keyword}`;
  return new Promise(async (resolve, reject) => {
    fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return reject();
        }
      })
      .then((res) =>{return(resolve(res))});
  });
}
