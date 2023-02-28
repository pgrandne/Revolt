export const handleEthereum = () => {
    const { ethereum } = window;
    if (ethereum) {
        console.log('Ethereum successfully detected!');
        return true
    }
    else {
        console.log('Metamask is not installed!');
        return false
    }
}