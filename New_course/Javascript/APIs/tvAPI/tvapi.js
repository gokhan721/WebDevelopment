const searchForm = document.getElementById("searchForm");
searchForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const searchTerm = searchForm.elements.query.value;
    const config = { params: { q: searchTerm } };
    const res = await axios.get(`http://api.tvmaze.com/search/shows`, config);
    displayImages(res.data);
    searchForm.elements.query.value = '';
});


const displayImages = async (data) => {
    data.forEach(res => {
        try {
            if (res.show.image) {
                const img = document.createElement("img");
                img.src = res.show.image.medium;
                document.body.append(img);
            }
        } catch (e) {
            console.log(e);
        }
    });
}