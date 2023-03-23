export interface instagramPostI{
    imageUrl: string;
    caption: any;
}
export const handleInstagramPost = async(prompt: instagramPostI) => {
const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': 'http://localhost:8000/instagrampost',
                'Access-Control-Allow-Credentials': 'true' },
    body: JSON.stringify({ "imageUrl": prompt.imageUrl, "caption": prompt.caption})
};
let feedResponse = await fetch('http://localhost:8000/instagrampost', requestOptions)
.then(response => {
    return response.json();
});
return feedResponse;

}