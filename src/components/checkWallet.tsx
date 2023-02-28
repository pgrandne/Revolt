export const handleEthereum = () => {
    if (typeof window.ethereum !== 'undefined') {
        console.log('Ethereum successfully detected!');
        return true
    }
    else {
        console.log('Metamask is not installed!');
        return false
    }
}