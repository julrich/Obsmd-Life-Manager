async function random_picture_url(size, query, tp) {
    const markdownLink = await tp.web.random_picture(size, query);
    const url = markdownLink.match(/\((.*)\)/);
    if (url && url.length > 1) {
        return url[1];
    }
    return "Error while fetching random picture url... :(";
}
module.exports = random_picture_url;
