

const childrenOfParentApi =async (email) => {
  try {
    const res = await fetch(`http://localhost:3001/cldListById/${email}`, {
      method: 'GET',
      mode: 'cors',
    })
    const data = await res.json()
    return 
  } catch (err) {
    console.log("error", err);
  }
}

export default childrenOfParentApi;