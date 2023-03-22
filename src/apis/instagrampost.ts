export interface instagramPostI{
    urlImage: string;
    caption: any;
}
export const handleInstagramPost = async(prompt: instagramPostI) => {
const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': 'http://localhost:8000/instagrampost',
                'Access-Control-Allow-Credentials': 'true' },
    body: JSON.stringify({ "urlImage": prompt.urlImage, "caption": prompt.caption})
};
let feedResponse = await fetch('http://localhost:8000/instagrampost', requestOptions)
.then(response => {
    return response.json();
});
return feedResponse;

}