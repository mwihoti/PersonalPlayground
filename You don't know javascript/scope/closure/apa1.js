function showId (id, getid = () => id) {
    var id = 12;
    console.log(getid())
    console.log(id)
}
showId('t')