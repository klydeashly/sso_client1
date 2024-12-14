const targetOrigin = `http://localhost:5175`

const send_data =  (data) => {
    const iframe = document.querySelector('iframe');
    const window = iframe.contentWindow;
    window.postMessage(JSON.stringify(data), "*")
}

export default send_data;