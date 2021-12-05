const getDate = () => {
    const nowSecDate = Date.now() / 1000
    const weekSec = 604800 + nowSecDate
    console.log(new Date(weekSec * 1000).getDay());
}
getDate()